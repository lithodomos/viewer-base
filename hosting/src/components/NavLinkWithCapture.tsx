interface Props {
  children: any;
  to: string;
  buttonName: string;
}

// TODO: [AW-752] there is an issue with iOS where you need to double click a link to activate :S
// TODO: write tests
export default function NavLinkWithCapture({
  children,
  to,
  buttonName,
}: Props) {
  const onClick = () => {
    window.alert("Not implemented");
  };

  return (
    <a onClick={onClick} href={to}>
      {children}
    </a>
  );
}
