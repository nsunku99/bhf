export type PostInfo = {
  title: string;
  body: string;
  tags: string[];
};

export default function Post({ title, body, tags }: PostInfo) {
  return (
    <div className='p-3 my-5 text-lg border rounded-lg border-slate-800'>
      <p className='m-2 font-semibold'>{title}</p>
      <p className='m-2 text-sm'>{body}</p>
      <div className='m-2'>
        {tags.map((val: string) => (
          <span key={val} className='p-2 mr-3 text-xs rounded bg-slate-300'>
            {val}
          </span>
        ))}
      </div>
    </div>
  );
}
