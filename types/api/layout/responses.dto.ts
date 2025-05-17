export interface ILayoutResponseDto {
  layout: ISectionItem[]
}
export interface ISectionItem {
  is_active: boolean;
  code: string
  name: string;
}