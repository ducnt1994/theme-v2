

// import { SectionBlock } from "@/types/api/layout";
// import { componentFactory } from "@/utils/componentFactory";

interface PageBuilderProps {
  // layout: SectionBlock[];
  layout: any[];
}

// Server Component
export default function PageBuilder({ layout }: PageBuilderProps) {
  return (
    <>
      {/*{layout.map((section) => {*/}
      {/*  const SectionComponent =*/}
      {/*    componentFactory?.[section.type]?.[section.component];*/}
      {/*  if (!SectionComponent) return null;*/}

      {/*  return (*/}
      {/*    <div*/}
      {/*      key={section.id}*/}
      {/*      style={{ backgroundColor: section.backgroundColor || "transparent" }}*/}
      {/*    >*/}
      {/*      <SectionComponent {...section.config} />*/}
      {/*    </div>*/}
      {/*  );*/}
      {/*})}*/}
    </>
  );
}