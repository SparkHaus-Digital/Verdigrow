import AnimatedImage from "@/components/AnimatedImage";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

export const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,
    [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-2xl font-semibold mb-4">{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-xl font-semibold mb-3">{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4 className="text-lg font-semibold mb-2">{children}</h4>,
    [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc ml-6 mb-4">{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal ml-6 mb-4">{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li className="mb-2">{children}</li>,
    [BLOCKS.QUOTE]: (node, children) => <blockquote className="border-l-4 border-secondary pl-4 italic mb-4">{children}</blockquote>,
    [BLOCKS.HR]: () => <hr className="my-6 border-gray-300" />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title } = node.data.target.fields;
      return (
        <div className="w-[75vw] h-72 relative overflow-hidden rounded-tr-[100px] rounded-bl-[100px] border-2 border-secondary mb-4">
          <AnimatedImage
            src={`https:${file.url}`}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      );
    },
    [INLINES.HYPERLINK]: (node, children) => (
      <a href={node.data.uri} target="_blank" rel="noreferrer" className="text-primary underline">
        {children}
      </a>
    ),
  },
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    [MARKS.CODE]: (text) => <code className="bg-gray-200 px-1 rounded">{text}</code>,
  },
};
