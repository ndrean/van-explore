import footer from "./footer";
import header from "./header";
import button from "./button";

const contentAgreement = ({ ctx, ...props }) => {
  const { van, classes } = ctx;
  const { article, label, input, div } = van.tags;
  const { id, idContent, states } = props;
  const [state, ...rest] = states;
  const Footer = footer(ctx);
  const Header = header(ctx);
  const Button = button(ctx);

  const btnClose = (id, state) =>
    Button(
      {
        accent: true,
        raised: true,
        ripple: true,
        onclick: () => {
          state.val = false;
          document.getElementById(id).close();
        },
      },
      "close"
    );

  const btnAccept = (id) =>
    Button(
      {
        primary: true,
        raised: true,
        onclick: () => {
          document.getElementById(id).close();
        },
      },
      "Accept"
    );

  return div(
    { id: idContent },
    Header({}, "My beauty"),
    article(
      label(
        input({
          type: "checkbox",
          id: "agreement",
          name: "agreement",
          checked: state,
          onchange: (e) => (state.val = e.target.checked),
        }),
        "I agree with the terms and conditions"
      )
    ),
    Footer({}, btnClose(id, state), btnAccept(id))
  );
};

export default contentAgreement;