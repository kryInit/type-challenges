type MyReturnType<T> = T extends (...arr: any[]) => infer S ? S : never;
