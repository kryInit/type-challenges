type MyOmit<T, K extends keyof T> = { [ P in keyof T as P extends K ? never : P]: T[P] }

// こう書きたくなったが、結局やっていることはfilteringなのでasでも同じことができるっぽい
// as, ちょっと怖いが型内に閉じているから別に問題なさそうかな
// というかasって型内のfilterなんだろうか
// type MyOmit<T, K extends keyof T> = { [ P in MyOmitHelper<keyof T, K>]: T[P] }
// type MyOmitHelper<T, K> = T extends K ? never : T;
