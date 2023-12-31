interface IProps {
  title: string;
}

export default function MetaComponent(props: IProps) {
  return (
    <>
      <title>{props.title}</title>
    </>
  )
}