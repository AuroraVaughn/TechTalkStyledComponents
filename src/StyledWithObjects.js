import React from "react";
import { render } from "react-dom";
import { NavLink } from "react-router-dom";

const styles = {
  Container: {
    display: "flex",
    flexDirection: "column",
    justifySelf: "center",
    alignSelf: "center",
    flex: "column",
    border: "solid",
    borderWidth: 1,
    borderRadius: 2,
    shadowColor: "green",
    shadowOffset: { width: 4, height: 3 },
    shadowRadius: 3,
    elevation: 1,
    marginLeft: "20%",
    marginRight: "20%",
    marginTop: 15,
    backgroundColor: "pink"
  },
  Section: {
    border: "solid",
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    position: "relative"
  },
  h2: {
    fontSize: "40px",
    color: "pink",
    backgroundColor: "#4AA045",
    textAlign: "center"
  },
  h3: {
    fontSize: "40px",
    color: "#4AA045",
    backgroundColor: "pink",
    textAlign: "center"
  },
  p: {
    textAlign: "center"
  },
  ul: {
    height: "100%",
    backgroundColor: "pink"
  },
  li: { color: "#4AA045" }
};

// const StyledWithObjects = props => {
//   return (
//     <div style={styles.Container}>
//       <div style={styles.Section}>
//         <h2 style={styles.h2}> Style Objects!</h2>
//       </div>
//       <div style={styles.Section}>
//         <h3 style={styles.h3}> I'm feeling fruity!!!!</h3>
//       </div>
//       <div style={styles.Section}>
//         <ul style={styles.ul}>
//           <li style={styles.li}>Am I sweet?</li>
//           <li style={styles.li}>Am I sour?</li>
//           <li style={styles.li}>Style objects are making me both.</li>
//         </ul>
//       </div>
//       <div style={styles.Section}>
//         <p style={styles.p}>
//           Style objects are really just naming collections of inline styles.
//         </p>
//       </div>
//     </div>
//   );
// };

const Container = props => <div style={styles.Container}>{props.children}</div>;
const Section = props => <div style={styles.Section}>{props.children}</div>;
const Header3 = props => <span style={styles.h3}>{props.children}</span>;
const Header2 = props => <span style={styles.h2}>{props.children}</span>;
const Text = props => <span style={styles.p}>{props.children}</span>;

const StyledWithObjects = props => {
  return (
    <Container>
      <Section>
        <Header2> Style Objects!</Header2>
      </Section>
      <Section>
        <Header3> I'm feeling fruity!!!!</Header3>
      </Section>
      <Section>
        <ul style={styles.ul}>
          <li style={styles.li}>Am I sweet?</li>
          <li style={styles.li}>Am I sour?</li>
          <li style={styles.li}>Style objects are making me both.</li>
        </ul>
      </Section>
      <Section>
        <Text>
          Style objects are really just naming collections of inline styles.
        </Text>
      </Section>
    </Container>
  );
};

export default StyledWithObjects;
