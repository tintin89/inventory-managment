import styled from "styled-components";
import { GiPadlock } from "react-icons/gi";
export function FooterLogin() {
  return (
    <Container>
      <section className="lock">
        <GiPadlock />
        <span>
          This is a secure page of 'organization name'. If you want to know more
          about us you can call
          <br /> 'phone number #### or contact us via email or social media'.
        </span>
      </section>
      <section className="rights">
        <span>Org. Name - Other info</span>
        <div className="divider"></div>
        <span>All Reserverd Rights</span>
        <div className="divider"></div>
        <span>© 2024 myorgweb.com</span>
      </section>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12.2px;
  color: #91a4b7;
  gap: 5px;
  .lock {
    border-bottom: 1px solid rgba(145, 164, 183, 0.3);
    gap: 5px;
    display: flex;
    align-items: center;
  }
  .rights {
    display: flex;
    justify-content: space-between;
    .divider {
      width: 1px;
      background-color: rgba(145, 164, 183, 0.3);
      margin-top: 4px;
      height: 80%;
      align-items: center;
      display: flex;
    }
    span {
      margin-top: 5px;
    }
  }
`;
