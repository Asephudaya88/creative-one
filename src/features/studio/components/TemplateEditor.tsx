import { useState } from "react";

type Props = {
  template: string;
};

export default function TemplateEditor({ template }: Props) {
  const [title, setTitle] = useState(template);
  const [content, setContent] = useState("");

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mt-6">
      <h2 className="text-3xl font-bold text-slate-800 mb-4">
        🎨 Editor {template}
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Judul Desain"
          className="w-full border border-slate-300 rounded-xl p-3 text-black"
        />

        <textarea
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Isi konten..."
          className="w-full border border-slate-300 rounded-xl p-3 text-black"
        />

        <input
          type="file"
          className="w-full border border-slate-300 rounded-xl p-3"
        />

        <div className="flex gap-3">
          <button className="px-5 py-3 bg-blue-600 text-white rounded-xl font-bold">
            Generate AI
          </button>

          <button className="px-5 py-3 bg-emerald-600 text-white rounded-xl font-bold">
            Download PNG
          </button>
        </div>
      </div>

      <div className="mt-8 border-t pt-6">
        <h3 className="font-bold text-xl mb-3">
          Preview Desain
        </h3>

        <div className="border rounded-xl p-8 bg-gradient-to-br from-blue-600 to-indigo-800 text-white min-h-[300px] flex flex-col justify-center">
          <h1 className="text-4xl font-black mb-4 text-center">
            {title || "Judul Desain"}
          </h1>

          <p className="text-center whitespace-pre-wrap">
            {content || "Isi desain akan muncul di sini..."}
          </p>
        </div>
      </div>
    </div>
  );
}