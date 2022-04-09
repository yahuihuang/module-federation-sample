// 1. 從容器返回請求的模塊
type Factory = () => any;

// 2. 具有 get 和 init 方法的接口
interface Container {
  init(shareScope: string): void;

  get(module: string): Factory;
}

// 3. 一個 Webpack 默認變量，它初始化共享作用域並從本地構建或遠程容器構建中添加所有已知提供的模塊
declare const __webpack_init_sharing__: (shareScope: string) => Promise<void>;
// 4. 一個默認的 Webpack 變量，用於初始化暴露的模塊或容器
declare const __webpack_share_scopes__: { default: string };

// 5. 創建一個類 MfeUtil 並在其中添加一個函數
export enum FileType {
  Component = 'Component',
  Module = 'Module',
  Css = 'CSS',
  Html = 'Html'
}

export interface LoadRemoteFileOptions {
  remoteEntry: string;
  remoteName: string;
  exposedFile: string;
  exposeFileType: FileType;
}

export class MfeUtil {
  // holds list of loaded script
  private fileMap: Record<string, boolean> = {};

  // 8.添加一個函數來加載遠程文件。
  //   此函數接受 loadRemoteFile 參數並返回帶有公開文件的承諾。
  //   這是您將在應用程序路由中使用的公共功能
  async loadRemoteFile (loadRemoteModuleOptions: LoadRemoteFileOptions): Promise<any> {
    await this.loadRemoteEntry(loadRemoteModuleOptions.remoteEntry);
    return await this.findExposedModule<any>(
      loadRemoteModuleOptions.remoteName,
      loadRemoteModuleOptions.exposedFile
    );
  }

  // 7. 添加功能以查找公開模塊。 這個函數將從作用域中獲取暴露的模塊。
  //   它將首先使用默認名稱“default”初始化共享範圍。 此名稱可以更改
  //   然後，此函數將從窗口中檢索特定容器，初始化容器，
  //   最後檢索公開的模塊或文件並返回帶有檢索到的模塊的工廠
  private findExposedModule = async <T>(uniqueName: string, exposedFile: string): Promise<T | undefined> => {
    let Module: T | undefined;
    // Initializes the shared scope. Fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__('default');
    const container: Container = (window as any)[uniqueName];  // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    const factory = await container.get(exposedFile);
    Module = factory();
    return Module
  }

  // 6. 添加一個函數來加載遠程入口。
  //    此函數將獲取遙控器的代碼並將其附加到文檔的正文中。
  //    它接受一個字符串參數並返回一個承諾。
  //    當遠程腳本成功加載到應用程序主體上時，promise 解決
  private async loadRemoteEntry (remoteEntry: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const scriptId = `${remoteEntry.substring(remoteEntry.lastIndexOf('/') + 1)}`;
      const getScript = document.getElementById(scriptId);
      if (getScript || this.fileMap[remoteEntry]) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = remoteEntry;
      script.id = scriptId;

      script.onerror = (error: string | Event) => {
        console.error(error, 'unable to load remote entry, show error or something');
        reject();
      }
      script.onload = () => {
        this.fileMap[remoteEntry] = true;
        resolve(); // window is the global namespace
      };
      document.body.append(script);
    });
  }
}
