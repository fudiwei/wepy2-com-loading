export interface WepyComponentLoading {
    /**
     * 显示加载对话框。
     * @param {String | Object} options
     */
    show(options?: string | WepyComponentLoading.LoadingOptions): void;

    /**
     * 隐藏加载对话框。
     */
    hide(): void;
}

export namespace WepyComponentLoading {
    export interface LoadingOptions {
        content: string;
    }
}