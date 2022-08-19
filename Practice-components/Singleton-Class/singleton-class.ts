export default class SingletonClass {
  private static _instance: SingletonClass;
  public sampledata: string | undefined;

  private constructor() {}

  public static getInstance(): SingletonClass {
    if (!SingletonClass._instance) {
      SingletonClass._instance = new SingletonClass();
    }
    return SingletonClass._instance;
  }

  get selectedData(): string {
    console.log('Singleton Instance>>>', SingletonClass._instance);
    return this.sampledata;
  }

  set selectedData(data: string) {
    this.sampledata = data;
  }
}
