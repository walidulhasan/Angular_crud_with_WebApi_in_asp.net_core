export class AppsModel {
  constructor(
    public AppId?: number,
    public imageName?: string,
    public AppName?: string,
    public AppSize?: number,
    public AppPublish?: Date,
    public AppCategory?: string,
    public AppDescription?:string,
    public PayOrNot?:string
  ) { }
}
