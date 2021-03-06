/**
 * 传感器
 * 接口声明: {"name": "system.sensor"}
 */
declare module '@system.sensor' {
    /**
     * 监听重力感应数据。如果多次调用，仅最后一次调用生效
     * @param obj
     */
    export function subscribeAccelerometer(obj: {
        /**
         * 是否持久化订阅，默认为false。机制：设置为true，页面跳转，不会自动取消订阅，需手动取消订阅
         * [1050+]
         */
        reserved?: boolean,
        /**
         * 1060+
         * 监听加速度数据回调函数的执行频率，默认normal
         * interval 的合法值：
         * game: 适用于更新游戏的回调频率，在 20ms/次 左右
         * ui: 适用于更新 UI 的回调频率，在 60ms/次 左右
         * normal: 普通的回调频率，在 200ms/次 左右
         */
        interval?: string,
        /**
         * 重力感应数据变化后会回调此函数
         */
        callback?: (ret: {
            /**
             * x 轴坐标
             */
            x: number,
            /**
             * y 轴坐标
             */
            y: number,
            /**
             * z 轴坐标
             */
            z: number
        }) => void
    }): void

    /**
     * 取消监听重力感应数据
     */
    export function unsubscribeAccelerometer(): void

    /**
     * 监听罗盘数据。如果多次调用，仅最后一次调用生效
     * @param obj
     */
    export function subscribeCompass(obj: {
        /**
         * 是否持久化订阅，默认为false。机制：设置为true，页面跳转，不会自动取消订阅，需手动取消订阅
         * [1050+]
         */
        reserved?: boolean,
        /**
         * 罗盘数据变化后会回调此函数。
         */
        callback?: (ret: {
            /**
             * 面对的方向度数
             */
            direction: number
        }) => void
    }): void

    /**
     * 取消监听罗盘数据
     */
    export function unsubscribeCompass(): void

    /**
     * 监听距离感应数据。如果多次调用，仅最后一次调用生效。
     * @param obj
     */
    export function subscribeProximity(obj: {
        /**
         * 是否持久化订阅，默认为false。机制：设置为true，页面跳转，不会自动取消订阅，需手动取消订阅
         * [1050+]
         */
        reserved?: boolean,
        /**
         * 距离感应数据变化后会回调此函数
         */
        callback?: (ret: {
            /**
             * 手机距离，单位为 cm
             */
            distance: number
        }) => void
    }): void

    /**
     * 取消监听距离感应数据。
     */
    export function unsubscribeProximity(): void

    /**
     * 监听光线感应数据。如果多次调用，仅最后一次调用生效
     * @param obj
     */
    export function subscribeLight(obj: {
        /**
         * 是否持久化订阅，默认为false。机制：设置为true，页面跳转，不会自动取消订阅，需手动取消订阅
         * [1050+]
         */
        reserved?: boolean,
        /**
         * 光线感应数据变化后会回调此函数
         */
        callback?: (ret: {
            /**
             * 光线强度，单位为 lux
             */
            intensity: number
        }) => void
    }): void

    /**
     * 取消监听光线感应数据
     */
    export function unsubscribeLight(): void

    /**
     * 监听计步传感器数据。如果多次调用，仅最后一次调用生效。
     * [1050+]
     * @param obj
     */
    export function subscribeStepCounter(obj: {
        /**
         * 是否持久化订阅，默认为false。机制：设置为true，页面跳转，不会自动取消订阅，需手动取消订阅
         * [1050+]
         */
        reserved?: boolean,
        /**
         * 计步传感器数据变化后会回调此函数
         */
        callback?: (ret: {
            /**
             * 光计步传感器当前累计记录的步数。每次手机重启，这个值就会从0开始重新计算
             */
            steps: number
        }) => void
    }): void

    /**
     * 取消监听计步传感器数据。
     */
    export function unsubscribeStepCounter(): void
}