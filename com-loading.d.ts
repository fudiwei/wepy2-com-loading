export interface ComponentLoading {
    /**
     * 显示加载对话框。
     * @param {String | Object} options
     */
    show(
        options?:
            | string
            | {
                  content: string;
              }
    ): void;

    /**
     * 隐藏加载对话框。
     */
    hide(): void;
}
