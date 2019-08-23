/**
 * 多媒体
 * 接口声明: {"name": "system.media"}
 */
declare module '@system.media' {
    /**
     * 拍摄照片[权限要求:使用相机]
     * @param obj
     */
    export function takePhoto(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 选取的文件路径
             */
            uri: string
        }) => void,
        /**
         * 失败回调
         * 201: 用户拒绝，获取相机权限失败
         */
        fail?: (data, code) => void,
        /**
         * 取消回调
         */
        cancel?: () => void,
        /**
         * 执行结束后的回调
         */
        complete?: () => void
    }): void

    /**
     * 拍摄视频[权限要求:使用相机]
     * @param obj
     */
    export function takeVideo(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 选取的文件路径
             */
            uri: string
        }) => void,
        /**
         * 失败回调
         * 201: 用户拒绝，获取相机权限失败
         */
        fail?: (data, code) => void,
        /**
         * 取消回调
         */
        cancel?: () => void,
        /**
         * 执行结束后的回调
         */
        complete?: () => void
    }): void

    /**
     * 选择图片[权限要求:读手机存储]
     * @param obj
     */
    export function pickImage(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 选取的文件路径
             */
            uri: string
        }) => void,
        /**
         * 失败回调
         */
        fail?: (data, code) => void,
        /**
         * 取消回调
         */
        cancel?: () => void,
        /**
         * 执行结束后的回调
         */
        complete?: () => void
    }): void

    /**
     * 选择视频[权限要求:读手机存储]
     * @param obj
     */
    export function pickVideo(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 选取的文件路径
             */
            uri: string
        }) => void,
        /**
         * 失败回调
         */
        fail?: (data, code) => void,
        /**
         * 取消回调
         */
        cancel?: () => void,
        /**
         * 执行结束后的回调
         */
        complete?: () => void
    }): void

    /**
     * 选择文件[权限要求:读手机存储]
     * [1010+]
     * @param obj
     */
    export function pickFile(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 选取的文件路径
             */
            uri: string
        }) => void,
        /**
         * 失败回调
         */
        fail?: (data, code) => void,
        /**
         * 取消回调
         */
        cancel?: () => void,
        /**
         * 执行结束后的回调
         */
        complete?: () => void
    }): void

    /**
     * 将图片/视频保存到相册中[权限要求:读手机存储]
     * @param obj
     */
    export function saveToPhotosAlbum(obj: {
        /**
         * 源文件的uri，文件的扩展名必须是图片或视频的扩展名
         */
        uri: string,
        /**
         * 成功回调
         */
        success?: () => void,
        /**
         * 失败回调
         * 201: 用户拒绝
         * 202: 参数错误
         * 300: I/O 错误
         */
        fail?: (data, code) => void,
        /**
         * 执行结束后的回调
         */
        complete?: () => void
    }): void

    /**
     * 获取系统铃声。如果是获取来电铃声，双卡情况下，获取的是卡1对应的铃声。[权限要求:读手机存储]
     * [1040+]
     * @param obj
     */
    export function getRingtone(obj: {
        /**
         * 铃声类型，ringtone：来电，notification：通知，alarm：闹钟
         */
        type: string,
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 铃声名称，若铃声被删除，返回空字符串
             */
            title: string
        }) => void,
        /**
         * 失败回调
         * 202: 参数错误，即铃声类型不对
         */
        fail?: (data, code) => void,
        /**
         * 执行结束后的回调
         */
        complete?: () => void
    }): void;

    /**
     * 设置系统铃声，目前只支持本地文件。如果是设置来电铃声，双卡情况下，卡1卡2对应的铃声都会设置。
     * [权限要求:写手机存储。而且每次设置铃声时，都有弹框来让用户选择是否同意设置铃声]
     * [1040+]
     * @param obj
     */
    export function setRingtone(obj: {
        /**
         * 铃声文件路径，只支持本地文件
         */
        uri: string,
        /**
         * 铃声类型，ringtone：来电，notification：通知，alarm：闹钟
         */
        type: string,
        /**
         * 铃声名称，没有设置默认取文件名
         */
        title?: string,
        /**
         * 成功回调
         */
        success?: () => void,
        /**
         * 失败回调
         * 201: 用户拒绝
         * 202: 参数错误，参数错误，即铃声类型不对，目前支持的铃声类型有15种，文件后缀分别为：.mp3、 .ogg、 .oga、 .flac、 .wav、 .m4a、 .amr、 .awb、 .wma、 .aac、 .mka、 .mid、 .midi、 .smf、 .imy
         * 1001: 件不存在
         */
        fail?: (data, code) => void,
        /**
         * 执行结束后的回调
         */
        complete?: () => void
    }): void;

    /**
     * 预览图片，调用之后会在新打开的页面中全屏预览传入的图片，预览的过程中用户可以左右滑动浏览，可以通过双指缩放图片，可以保存图片到相册
     * [权限要求:写手机存储]
     * [1040+]
     * @param obj
     */
    export function previewImage(obj: {
        /**
         * 数据类型可选择Number或者String：
         * Number：当前显示的图片的下标，默认0；
         * String：当前显示的图片链接，默认为uris中的第一张的地址
         */
        current?: number | string,
        /**
         * 需要预览的图片链接列表，同时支持网络和本地地址
         */
        uris: string[],
        /**
         * 成功回调
         */
        success?: () => void,
        /**
         * 失败回调
         */
        fail?: (data, code) => void,
        /**
         * 执行结束后的回调
         */
        complete?: () => void
    }): void;

    /**
     * 选择多张图片[权限要求:读手机存储]
     * [1040+]
     * @param obj
     */
    export function pickImages(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 选取的文件路径列表
             */
            uris: string[]
        }) => void,
        /**
         * 失败回调
         */
        fail?: (data, code) => void,
        /**
         * 取消回调
         */
        cancel?: () => void,
        /**
         * 执行结束后的回调
         */
        complete?: () => void
    }): void;

    /**
     * 选择多个视频[权限要求:读手机存储]
     * [1040+]
     * @param obj
     */
    export function pickVideos(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 选取的文件路径列表
             */
            uris: string[]
        }) => void,
        /**
         * 失败回调
         */
        fail?: (data, code) => void,
        /**
         * 取消回调
         */
        cancel?: () => void,
        /**
         * 执行结束后的回调
         */
        complete?: () => void
    }): void;
}