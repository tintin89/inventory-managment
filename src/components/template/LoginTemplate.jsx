import styled from "styled-components";
import { Btnsave } from "../molecules/BtnSave";
import { v } from "../../styles/variables";
import { useAuthStore } from "../../store/AuthStore";
import { Device } from "../../styles/breackpoints";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import carLogo from "../../assets/carLogo.svg";
import inventoryLogo from "../../assets/inventoryLogo.png";
import { MdOutlineInfo } from "react-icons/md";
import { ThemeContext } from "../../App";
import InputText from "../organism/forms/InputText";
import { FooterLogin } from "../organism/FooterLogin";

export default function LoginTemplate() {
  const { setTheme } = useContext(ThemeContext);
  /*setTheme("light");*/
  const { signInWithEmail } = useAuthStore();
  const [state, setState] = useState(false);
  const [stateStart, setStateStart] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  async function startSignIn(data) {
    const response = await signInWithEmail({
      email: data.email,
      password: data.password,
      
    });
    if (response) {
      navigate("/");
    } else {
      setStateStart(true);
    }
  }

  return (
    <Container>
      <div className="contentLogo">
        <img src={inventoryLogo}></img>
        <span>ManagerPRO</span>
      </div>
      <div className="bannerlateral">
        <img src={carLogo}></img>
      </div>

      <div className="contentCard">
        <div className="card">
          {/*state && <RegistrarAdmin setState={() => setState(!state)} />*/}
          <Titulo>ManagerPro</Titulo>
          {stateStart && <TextoStateInicio>Wrong Data!</TextoStateInicio>}
          <span className="ayuda">
            {" "}
           You can create a new account or <br></br> ask your manager to create one for you.. <MdOutlineInfo />
          </span>
          <p className="frase">Manage your inventory.</p>
          <form onSubmit={handleSubmit(startSignIn)}>
            <InputText icon={<v.iconoemail/>}>
              <input
                className="form__field"
                type="text"
                placeholder="enter your email here"
                {...register("email", {
                  required: true,
                })}
              />
              <label className="form__label">email</label>
              {errors.email?.type === "required" && <p>Required Field</p>}
            </InputText>
            <InputText icon={<v.iconopass/>}>
              <input
                className="form__field"
                type="password"
                placeholder="enter your password here"
                {...register("password", {
                  required: true,
                })}
              />
              <label className="form__label">password</label>
              {errors.password?.type === "required" && <p>Required Field</p>}
            </InputText>
            <ContainerBtn>
              <Btnsave title="Start" bgcolor="#fc6b32" />
              <Btnsave
                myFunction={() => setState(!state)}
                title="Signup"
                bgcolor="#ffffff"
              />
            </ContainerBtn>
          </form>
        </div>
        <FooterLogin/>
      </div>
    </Container>
  );
}
const Container = styled.div`
  background-size: cover;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #262626;
  @media ${Device.tablet} {
    grid-template-columns: 1fr 2fr;
  }
  .contentLogo {
    position: absolute;
    top: 15px;
    font-weight: 700;
    display: flex;
    left: 15px;
    align-items: center;
    color: #fff;

    img {
      width: 50px;
    }
  }
  .cuadros {
    transition: cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    transition: 0.6s;
  }

  .bannerlateral {
    background-color: #fc6b32;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 80%;
    }
  }
  .contentCard {
    grid-column: 2;
    background-color: #ffffff;
    background-size: cover;
    z-index: 100;
    position: relative;
    gap: 30px;
    display: flex;
    padding: 20px;
    box-shadow: 8px 5px 18px 3px rgba(0, 0, 0, 0.35);
    justify-content: center;
    width: auto;
    height: 100%;
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    .card {
      padding-top: 80px;
      width: 100%;
      @media ${Device.laptop} {
        width: 50%;
      }
    }
    .version {
      color: #727272;
      text-align: start;
    }
    .contentImg {
      width: 100%;
      display: flex;
      justify-content: center;

      img {
        width: 40%;

        animation: flotar 1.5s ease-in-out infinite alternate;
      }
    }
    .frase {
      color: #fc6c32;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 30px;
    }
    .ayuda {
      position: absolute;
      top: 15px;
      right: 15px;
      color: #8d8d8d;
      font-size: 15px;
      font-weight: 500;
    }
    &:hover {
      .contentsvg {
        top: -100px;
        opacity: 1;
      }
      .cuadros {
        transform: rotate(37deg) rotateX(5deg) rotateY(12deg) rotate(3deg)
          skew(2deg) skewY(1deg) scaleX(1.2) scaleY(1.2);
        color: red;
      }
    }
  }
  @keyframes flotar {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
`;
const Titulo = styled.span`
  font-size: 3rem;
  font-weight: 700;
`;
const ContainerBtn = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;
const TextoStateInicio = styled.p`
  color: #fc7575;
`;
