interface Props {
  id: string;
}

const Youtube: React.FC<Props> = ({ id }) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${id}"`}
      className="w-full h-full aspect-video object-cover rounded-2xl"
    />
  );
};
export default Youtube;
