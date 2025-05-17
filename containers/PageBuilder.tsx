import {getServerComponent} from "@/utils/getServerComponent";
import {ILayoutResponseDto} from "@/types/api";

export default async function PageBuilder({ layout }: ILayoutResponseDto) {
  const renderedSections = await Promise.all(
    layout.filter(item => item.is_active).map(async (section, index) => {
      const Component = await getServerComponent(section.code, section.name);
      if (!Component) return null;

      return (
        <div key={index}>
          <Component />
        </div>
      );
    })
  );

  return <>{renderedSections}</>;
}