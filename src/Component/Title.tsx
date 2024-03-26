interface ITitle {
  title: String;
}

const Title = (props: ITitle) => {
  return <h1 className="text-BlueHeader text-center font-extrabold md: text-2xl">{props.title}</h1>;
};
export default Title;
