import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useDiv1Cb, useHeaderCb, useFlex2Cb, useDiv2Cb, useFlex3Cb, useFlex4Cb, useIntroCb, useFlex22Cb, useFlex23Cb, useDiv12Cb, useDiv13Cb, useFlex24Cb, useDiv14Cb, useFlex25Cb, useDiv9Cb, useTrustedCb, useFlex27Cb, useFlex28Cb, useDiv17Cb, useDiv18Cb, useDiv19Cb, useDiv20Cb, useServiceCb, useFlex29Cb, useDiv24Cb, useDiv22Cb, useDiv69Cb, useDiv70Cb, useFlex30Cb, useDiv26Cb, useDiv29Cb, useDiv32Cb, useDiv33Cb, useDiv37Cb, useDiv40Cb, useDiv38Cb, useDiv43Cb, useDiv42Cb, useDiv55Cb, useDiv53Cb, useDiv50Cb, useDiv44Cb, useDiv51Cb, useDiv47Cb, useDiv52Cb, useDiv48Cb, useDiv54Cb, useDiv67Cb, useDiv65Cb, useDiv62Cb, useDiv56Cb, useDiv63Cb, useDiv59Cb, useDiv64Cb, useDiv60Cb, useDiv66Cb, useProjectsCb, useFlex35Cb, useDiv74Cb, useDiv76Cb, useDiv77Cb, useDiv75Cb, useFlex43Cb, useFlex34Cb, useFlex36Cb, useDiv79Cb, useDiv80Cb, useDiv81Cb, useDiv83Cb, useFlex39Cb, useDiv95Cb, useDiv92Cb, useDiv93Cb, useDiv94Cb, useFlex40Cb, useDiv99Cb, useDiv96Cb, useDiv97Cb, useDiv98Cb, useFlex41Cb, useDiv103Cb, useDiv100Cb, useDiv101Cb, useDiv102Cb, useFlex42Cb, useDiv107Cb, useDiv104Cb, useDiv105Cb, useDiv106Cb, useFlex44Cb, useDiv110Cb, useFlex45Cb, useDiv112Cb, useBlogCb, useFlex46Cb, useDiv114Cb, useDiv116Cb, useDiv117Cb, useDiv118Cb, useFlex32Cb, useImage1Cb, useButton1Cb, useButton2Cb, useButton3Cb, useButton4Cb, useButton6Cb, useImage3Cb, useTextBox4Cb, useTextBox2Cb, useTextBox3Cb, useButton28Cb, useButton29Cb, useButton32Cb, useImage13Cb, useImage12Cb, useTextBox6Cb, useImage15Cb, useImage16Cb, useImage17Cb, useImage18Cb, useTextBox8Cb, useTextBox25Cb, useImage19Cb, useTextBox9Cb, useTextBox10Cb, useDiv36Cb, useTextBox11Cb, useDiv39Cb, useTextBox12Cb, useDiv41Cb, useTextBox13Cb, useTextBox18Cb, useImage20Cb, useDiv45Cb, useTextBox14Cb, useDiv46Cb, useTextBox15Cb, useDiv49Cb, useTextBox16Cb, useTextBox17Cb, useTextBox23Cb, useImage21Cb, useDiv57Cb, useTextBox19Cb, useDiv58Cb, useTextBox20Cb, useDiv61Cb, useTextBox21Cb, useTextBox22Cb, useTextBox26Cb, useTextBox27Cb, useTextBox28Cb, useButton35Cb, useButton36Cb, useImage22Cb, useBRANDINGCb, useSoulful_RebrandCb, useButton37Cb, useImage23Cb, useImage29Cb, useImage28Cb, useButton40Cb, useTextBox35Cb, useTextBox36Cb, useImage31Cb, useImage30Cb, useButton41Cb, useTextBox37Cb, useTextBox38Cb, useImage33Cb, useImage32Cb, useButton42Cb, useTextBox39Cb, useTextBox40Cb, useImage35Cb, useImage34Cb, useButton43Cb, useTextBox41Cb, useTextBox42Cb, useImage36Cb, useImage38Cb, useDiv115Cb, useTextBox43Cb, useTextBox44Cb, useTextBox45Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Div1Props = useStore((state)=>state["Home"]["Div1"]);
const Div1IoProps = useIoStore((state)=>state["Home"]["Div1"]);
const Div1Cb = useDiv1Cb()
const HeaderProps = useStore((state)=>state["Home"]["Header"]);
const HeaderIoProps = useIoStore((state)=>state["Home"]["Header"]);
const HeaderCb = useHeaderCb()
const Flex2Props = useStore((state)=>state["Home"]["Flex2"]);
const Flex2IoProps = useIoStore((state)=>state["Home"]["Flex2"]);
const Flex2Cb = useFlex2Cb()
const Div2Props = useStore((state)=>state["Home"]["Div2"]);
const Div2IoProps = useIoStore((state)=>state["Home"]["Div2"]);
const Div2Cb = useDiv2Cb()
const Flex3Props = useStore((state)=>state["Home"]["Flex3"]);
const Flex3IoProps = useIoStore((state)=>state["Home"]["Flex3"]);
const Flex3Cb = useFlex3Cb()
const Flex4Props = useStore((state)=>state["Home"]["Flex4"]);
const Flex4IoProps = useIoStore((state)=>state["Home"]["Flex4"]);
const Flex4Cb = useFlex4Cb()
const IntroProps = useStore((state)=>state["Home"]["Intro"]);
const IntroIoProps = useIoStore((state)=>state["Home"]["Intro"]);
const IntroCb = useIntroCb()
const Flex22Props = useStore((state)=>state["Home"]["Flex22"]);
const Flex22IoProps = useIoStore((state)=>state["Home"]["Flex22"]);
const Flex22Cb = useFlex22Cb()
const Flex23Props = useStore((state)=>state["Home"]["Flex23"]);
const Flex23IoProps = useIoStore((state)=>state["Home"]["Flex23"]);
const Flex23Cb = useFlex23Cb()
const Div12Props = useStore((state)=>state["Home"]["Div12"]);
const Div12IoProps = useIoStore((state)=>state["Home"]["Div12"]);
const Div12Cb = useDiv12Cb()
const Div13Props = useStore((state)=>state["Home"]["Div13"]);
const Div13IoProps = useIoStore((state)=>state["Home"]["Div13"]);
const Div13Cb = useDiv13Cb()
const Flex24Props = useStore((state)=>state["Home"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["Home"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const Div14Props = useStore((state)=>state["Home"]["Div14"]);
const Div14IoProps = useIoStore((state)=>state["Home"]["Div14"]);
const Div14Cb = useDiv14Cb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Div9Props = useStore((state)=>state["Home"]["Div9"]);
const Div9IoProps = useIoStore((state)=>state["Home"]["Div9"]);
const Div9Cb = useDiv9Cb()
const TrustedProps = useStore((state)=>state["Home"]["Trusted"]);
const TrustedIoProps = useIoStore((state)=>state["Home"]["Trusted"]);
const TrustedCb = useTrustedCb()
const Flex27Props = useStore((state)=>state["Home"]["Flex27"]);
const Flex27IoProps = useIoStore((state)=>state["Home"]["Flex27"]);
const Flex27Cb = useFlex27Cb()
const Flex28Props = useStore((state)=>state["Home"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["Home"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const Div17Props = useStore((state)=>state["Home"]["Div17"]);
const Div17IoProps = useIoStore((state)=>state["Home"]["Div17"]);
const Div17Cb = useDiv17Cb()
const Div18Props = useStore((state)=>state["Home"]["Div18"]);
const Div18IoProps = useIoStore((state)=>state["Home"]["Div18"]);
const Div18Cb = useDiv18Cb()
const Div19Props = useStore((state)=>state["Home"]["Div19"]);
const Div19IoProps = useIoStore((state)=>state["Home"]["Div19"]);
const Div19Cb = useDiv19Cb()
const Div20Props = useStore((state)=>state["Home"]["Div20"]);
const Div20IoProps = useIoStore((state)=>state["Home"]["Div20"]);
const Div20Cb = useDiv20Cb()
const ServiceProps = useStore((state)=>state["Home"]["Service"]);
const ServiceIoProps = useIoStore((state)=>state["Home"]["Service"]);
const ServiceCb = useServiceCb()
const Flex29Props = useStore((state)=>state["Home"]["Flex29"]);
const Flex29IoProps = useIoStore((state)=>state["Home"]["Flex29"]);
const Flex29Cb = useFlex29Cb()
const Div24Props = useStore((state)=>state["Home"]["Div24"]);
const Div24IoProps = useIoStore((state)=>state["Home"]["Div24"]);
const Div24Cb = useDiv24Cb()
const Div22Props = useStore((state)=>state["Home"]["Div22"]);
const Div22IoProps = useIoStore((state)=>state["Home"]["Div22"]);
const Div22Cb = useDiv22Cb()
const Div69Props = useStore((state)=>state["Home"]["Div69"]);
const Div69IoProps = useIoStore((state)=>state["Home"]["Div69"]);
const Div69Cb = useDiv69Cb()
const Div70Props = useStore((state)=>state["Home"]["Div70"]);
const Div70IoProps = useIoStore((state)=>state["Home"]["Div70"]);
const Div70Cb = useDiv70Cb()
const Flex30Props = useStore((state)=>state["Home"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["Home"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const Div26Props = useStore((state)=>state["Home"]["Div26"]);
const Div26IoProps = useIoStore((state)=>state["Home"]["Div26"]);
const Div26Cb = useDiv26Cb()
const Div29Props = useStore((state)=>state["Home"]["Div29"]);
const Div29IoProps = useIoStore((state)=>state["Home"]["Div29"]);
const Div29Cb = useDiv29Cb()
const Div32Props = useStore((state)=>state["Home"]["Div32"]);
const Div32IoProps = useIoStore((state)=>state["Home"]["Div32"]);
const Div32Cb = useDiv32Cb()
const Div33Props = useStore((state)=>state["Home"]["Div33"]);
const Div33IoProps = useIoStore((state)=>state["Home"]["Div33"]);
const Div33Cb = useDiv33Cb()
const Div37Props = useStore((state)=>state["Home"]["Div37"]);
const Div37IoProps = useIoStore((state)=>state["Home"]["Div37"]);
const Div37Cb = useDiv37Cb()
const Div40Props = useStore((state)=>state["Home"]["Div40"]);
const Div40IoProps = useIoStore((state)=>state["Home"]["Div40"]);
const Div40Cb = useDiv40Cb()
const Div38Props = useStore((state)=>state["Home"]["Div38"]);
const Div38IoProps = useIoStore((state)=>state["Home"]["Div38"]);
const Div38Cb = useDiv38Cb()
const Div43Props = useStore((state)=>state["Home"]["Div43"]);
const Div43IoProps = useIoStore((state)=>state["Home"]["Div43"]);
const Div43Cb = useDiv43Cb()
const Div42Props = useStore((state)=>state["Home"]["Div42"]);
const Div42IoProps = useIoStore((state)=>state["Home"]["Div42"]);
const Div42Cb = useDiv42Cb()
const Div55Props = useStore((state)=>state["Home"]["Div55"]);
const Div55IoProps = useIoStore((state)=>state["Home"]["Div55"]);
const Div55Cb = useDiv55Cb()
const Div53Props = useStore((state)=>state["Home"]["Div53"]);
const Div53IoProps = useIoStore((state)=>state["Home"]["Div53"]);
const Div53Cb = useDiv53Cb()
const Div50Props = useStore((state)=>state["Home"]["Div50"]);
const Div50IoProps = useIoStore((state)=>state["Home"]["Div50"]);
const Div50Cb = useDiv50Cb()
const Div44Props = useStore((state)=>state["Home"]["Div44"]);
const Div44IoProps = useIoStore((state)=>state["Home"]["Div44"]);
const Div44Cb = useDiv44Cb()
const Div51Props = useStore((state)=>state["Home"]["Div51"]);
const Div51IoProps = useIoStore((state)=>state["Home"]["Div51"]);
const Div51Cb = useDiv51Cb()
const Div47Props = useStore((state)=>state["Home"]["Div47"]);
const Div47IoProps = useIoStore((state)=>state["Home"]["Div47"]);
const Div47Cb = useDiv47Cb()
const Div52Props = useStore((state)=>state["Home"]["Div52"]);
const Div52IoProps = useIoStore((state)=>state["Home"]["Div52"]);
const Div52Cb = useDiv52Cb()
const Div48Props = useStore((state)=>state["Home"]["Div48"]);
const Div48IoProps = useIoStore((state)=>state["Home"]["Div48"]);
const Div48Cb = useDiv48Cb()
const Div54Props = useStore((state)=>state["Home"]["Div54"]);
const Div54IoProps = useIoStore((state)=>state["Home"]["Div54"]);
const Div54Cb = useDiv54Cb()
const Div67Props = useStore((state)=>state["Home"]["Div67"]);
const Div67IoProps = useIoStore((state)=>state["Home"]["Div67"]);
const Div67Cb = useDiv67Cb()
const Div65Props = useStore((state)=>state["Home"]["Div65"]);
const Div65IoProps = useIoStore((state)=>state["Home"]["Div65"]);
const Div65Cb = useDiv65Cb()
const Div62Props = useStore((state)=>state["Home"]["Div62"]);
const Div62IoProps = useIoStore((state)=>state["Home"]["Div62"]);
const Div62Cb = useDiv62Cb()
const Div56Props = useStore((state)=>state["Home"]["Div56"]);
const Div56IoProps = useIoStore((state)=>state["Home"]["Div56"]);
const Div56Cb = useDiv56Cb()
const Div63Props = useStore((state)=>state["Home"]["Div63"]);
const Div63IoProps = useIoStore((state)=>state["Home"]["Div63"]);
const Div63Cb = useDiv63Cb()
const Div59Props = useStore((state)=>state["Home"]["Div59"]);
const Div59IoProps = useIoStore((state)=>state["Home"]["Div59"]);
const Div59Cb = useDiv59Cb()
const Div64Props = useStore((state)=>state["Home"]["Div64"]);
const Div64IoProps = useIoStore((state)=>state["Home"]["Div64"]);
const Div64Cb = useDiv64Cb()
const Div60Props = useStore((state)=>state["Home"]["Div60"]);
const Div60IoProps = useIoStore((state)=>state["Home"]["Div60"]);
const Div60Cb = useDiv60Cb()
const Div66Props = useStore((state)=>state["Home"]["Div66"]);
const Div66IoProps = useIoStore((state)=>state["Home"]["Div66"]);
const Div66Cb = useDiv66Cb()
const ProjectsProps = useStore((state)=>state["Home"]["Projects"]);
const ProjectsIoProps = useIoStore((state)=>state["Home"]["Projects"]);
const ProjectsCb = useProjectsCb()
const Flex35Props = useStore((state)=>state["Home"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["Home"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Div74Props = useStore((state)=>state["Home"]["Div74"]);
const Div74IoProps = useIoStore((state)=>state["Home"]["Div74"]);
const Div74Cb = useDiv74Cb()
const Div76Props = useStore((state)=>state["Home"]["Div76"]);
const Div76IoProps = useIoStore((state)=>state["Home"]["Div76"]);
const Div76Cb = useDiv76Cb()
const Div77Props = useStore((state)=>state["Home"]["Div77"]);
const Div77IoProps = useIoStore((state)=>state["Home"]["Div77"]);
const Div77Cb = useDiv77Cb()
const Div75Props = useStore((state)=>state["Home"]["Div75"]);
const Div75IoProps = useIoStore((state)=>state["Home"]["Div75"]);
const Div75Cb = useDiv75Cb()
const Flex43Props = useStore((state)=>state["Home"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["Home"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Flex34Props = useStore((state)=>state["Home"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["Home"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Flex36Props = useStore((state)=>state["Home"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["Home"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Div79Props = useStore((state)=>state["Home"]["Div79"]);
const Div79IoProps = useIoStore((state)=>state["Home"]["Div79"]);
const Div79Cb = useDiv79Cb()
const Div80Props = useStore((state)=>state["Home"]["Div80"]);
const Div80IoProps = useIoStore((state)=>state["Home"]["Div80"]);
const Div80Cb = useDiv80Cb()
const Div81Props = useStore((state)=>state["Home"]["Div81"]);
const Div81IoProps = useIoStore((state)=>state["Home"]["Div81"]);
const Div81Cb = useDiv81Cb()
const Div83Props = useStore((state)=>state["Home"]["Div83"]);
const Div83IoProps = useIoStore((state)=>state["Home"]["Div83"]);
const Div83Cb = useDiv83Cb()
const Flex39Props = useStore((state)=>state["Home"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["Home"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const Div95Props = useStore((state)=>state["Home"]["Div95"]);
const Div95IoProps = useIoStore((state)=>state["Home"]["Div95"]);
const Div95Cb = useDiv95Cb()
const Div92Props = useStore((state)=>state["Home"]["Div92"]);
const Div92IoProps = useIoStore((state)=>state["Home"]["Div92"]);
const Div92Cb = useDiv92Cb()
const Div93Props = useStore((state)=>state["Home"]["Div93"]);
const Div93IoProps = useIoStore((state)=>state["Home"]["Div93"]);
const Div93Cb = useDiv93Cb()
const Div94Props = useStore((state)=>state["Home"]["Div94"]);
const Div94IoProps = useIoStore((state)=>state["Home"]["Div94"]);
const Div94Cb = useDiv94Cb()
const Flex40Props = useStore((state)=>state["Home"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["Home"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const Div99Props = useStore((state)=>state["Home"]["Div99"]);
const Div99IoProps = useIoStore((state)=>state["Home"]["Div99"]);
const Div99Cb = useDiv99Cb()
const Div96Props = useStore((state)=>state["Home"]["Div96"]);
const Div96IoProps = useIoStore((state)=>state["Home"]["Div96"]);
const Div96Cb = useDiv96Cb()
const Div97Props = useStore((state)=>state["Home"]["Div97"]);
const Div97IoProps = useIoStore((state)=>state["Home"]["Div97"]);
const Div97Cb = useDiv97Cb()
const Div98Props = useStore((state)=>state["Home"]["Div98"]);
const Div98IoProps = useIoStore((state)=>state["Home"]["Div98"]);
const Div98Cb = useDiv98Cb()
const Flex41Props = useStore((state)=>state["Home"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["Home"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const Div103Props = useStore((state)=>state["Home"]["Div103"]);
const Div103IoProps = useIoStore((state)=>state["Home"]["Div103"]);
const Div103Cb = useDiv103Cb()
const Div100Props = useStore((state)=>state["Home"]["Div100"]);
const Div100IoProps = useIoStore((state)=>state["Home"]["Div100"]);
const Div100Cb = useDiv100Cb()
const Div101Props = useStore((state)=>state["Home"]["Div101"]);
const Div101IoProps = useIoStore((state)=>state["Home"]["Div101"]);
const Div101Cb = useDiv101Cb()
const Div102Props = useStore((state)=>state["Home"]["Div102"]);
const Div102IoProps = useIoStore((state)=>state["Home"]["Div102"]);
const Div102Cb = useDiv102Cb()
const Flex42Props = useStore((state)=>state["Home"]["Flex42"]);
const Flex42IoProps = useIoStore((state)=>state["Home"]["Flex42"]);
const Flex42Cb = useFlex42Cb()
const Div107Props = useStore((state)=>state["Home"]["Div107"]);
const Div107IoProps = useIoStore((state)=>state["Home"]["Div107"]);
const Div107Cb = useDiv107Cb()
const Div104Props = useStore((state)=>state["Home"]["Div104"]);
const Div104IoProps = useIoStore((state)=>state["Home"]["Div104"]);
const Div104Cb = useDiv104Cb()
const Div105Props = useStore((state)=>state["Home"]["Div105"]);
const Div105IoProps = useIoStore((state)=>state["Home"]["Div105"]);
const Div105Cb = useDiv105Cb()
const Div106Props = useStore((state)=>state["Home"]["Div106"]);
const Div106IoProps = useIoStore((state)=>state["Home"]["Div106"]);
const Div106Cb = useDiv106Cb()
const Flex44Props = useStore((state)=>state["Home"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["Home"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Div110Props = useStore((state)=>state["Home"]["Div110"]);
const Div110IoProps = useIoStore((state)=>state["Home"]["Div110"]);
const Div110Cb = useDiv110Cb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Div112Props = useStore((state)=>state["Home"]["Div112"]);
const Div112IoProps = useIoStore((state)=>state["Home"]["Div112"]);
const Div112Cb = useDiv112Cb()
const BlogProps = useStore((state)=>state["Home"]["Blog"]);
const BlogIoProps = useIoStore((state)=>state["Home"]["Blog"]);
const BlogCb = useBlogCb()
const Flex46Props = useStore((state)=>state["Home"]["Flex46"]);
const Flex46IoProps = useIoStore((state)=>state["Home"]["Flex46"]);
const Flex46Cb = useFlex46Cb()
const Div114Props = useStore((state)=>state["Home"]["Div114"]);
const Div114IoProps = useIoStore((state)=>state["Home"]["Div114"]);
const Div114Cb = useDiv114Cb()
const Div116Props = useStore((state)=>state["Home"]["Div116"]);
const Div116IoProps = useIoStore((state)=>state["Home"]["Div116"]);
const Div116Cb = useDiv116Cb()
const Div117Props = useStore((state)=>state["Home"]["Div117"]);
const Div117IoProps = useIoStore((state)=>state["Home"]["Div117"]);
const Div117Cb = useDiv117Cb()
const Div118Props = useStore((state)=>state["Home"]["Div118"]);
const Div118IoProps = useIoStore((state)=>state["Home"]["Div118"]);
const Div118Cb = useDiv118Cb()
const Flex32Props = useStore((state)=>state["Home"]["Flex32"]);
const Flex32IoProps = useIoStore((state)=>state["Home"]["Flex32"]);
const Flex32Cb = useFlex32Cb()
const Image1Props = useStore((state)=>state["Home"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["Home"]["Image1"]);
const Image1Cb = useImage1Cb()
const Button1Props = useStore((state)=>state["Home"]["Button1"]);
const Button1IoProps = useIoStore((state)=>state["Home"]["Button1"]);
const Button1Cb = useButton1Cb()
const Button2Props = useStore((state)=>state["Home"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["Home"]["Button2"]);
const Button2Cb = useButton2Cb()
const Button3Props = useStore((state)=>state["Home"]["Button3"]);
const Button3IoProps = useIoStore((state)=>state["Home"]["Button3"]);
const Button3Cb = useButton3Cb()
const Button4Props = useStore((state)=>state["Home"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["Home"]["Button4"]);
const Button4Cb = useButton4Cb()
const Button6Props = useStore((state)=>state["Home"]["Button6"]);
const Button6IoProps = useIoStore((state)=>state["Home"]["Button6"]);
const Button6Cb = useButton6Cb()
const Image3Props = useStore((state)=>state["Home"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["Home"]["Image3"]);
const Image3Cb = useImage3Cb()
const TextBox4Props = useStore((state)=>state["Home"]["TextBox4"]);
const TextBox4IoProps = useIoStore((state)=>state["Home"]["TextBox4"]);
const TextBox4Cb = useTextBox4Cb()
const TextBox2Props = useStore((state)=>state["Home"]["TextBox2"]);
const TextBox2IoProps = useIoStore((state)=>state["Home"]["TextBox2"]);
const TextBox2Cb = useTextBox2Cb()
const TextBox3Props = useStore((state)=>state["Home"]["TextBox3"]);
const TextBox3IoProps = useIoStore((state)=>state["Home"]["TextBox3"]);
const TextBox3Cb = useTextBox3Cb()
const Button28Props = useStore((state)=>state["Home"]["Button28"]);
const Button28IoProps = useIoStore((state)=>state["Home"]["Button28"]);
const Button28Cb = useButton28Cb()
const Button29Props = useStore((state)=>state["Home"]["Button29"]);
const Button29IoProps = useIoStore((state)=>state["Home"]["Button29"]);
const Button29Cb = useButton29Cb()
const Button32Props = useStore((state)=>state["Home"]["Button32"]);
const Button32IoProps = useIoStore((state)=>state["Home"]["Button32"]);
const Button32Cb = useButton32Cb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const Image12Props = useStore((state)=>state["Home"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["Home"]["Image12"]);
const Image12Cb = useImage12Cb()
const TextBox6Props = useStore((state)=>state["Home"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["Home"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const Image18Props = useStore((state)=>state["Home"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["Home"]["Image18"]);
const Image18Cb = useImage18Cb()
const TextBox8Props = useStore((state)=>state["Home"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["Home"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const Image19Props = useStore((state)=>state["Home"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["Home"]["Image19"]);
const Image19Cb = useImage19Cb()
const TextBox9Props = useStore((state)=>state["Home"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Home"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const Div36Props = useStore((state)=>state["Home"]["Div36"]);
const Div36IoProps = useIoStore((state)=>state["Home"]["Div36"]);
const Div36Cb = useDiv36Cb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const Div39Props = useStore((state)=>state["Home"]["Div39"]);
const Div39IoProps = useIoStore((state)=>state["Home"]["Div39"]);
const Div39Cb = useDiv39Cb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const Div41Props = useStore((state)=>state["Home"]["Div41"]);
const Div41IoProps = useIoStore((state)=>state["Home"]["Div41"]);
const Div41Cb = useDiv41Cb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox18Props = useStore((state)=>state["Home"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Home"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const Div45Props = useStore((state)=>state["Home"]["Div45"]);
const Div45IoProps = useIoStore((state)=>state["Home"]["Div45"]);
const Div45Cb = useDiv45Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const Div46Props = useStore((state)=>state["Home"]["Div46"]);
const Div46IoProps = useIoStore((state)=>state["Home"]["Div46"]);
const Div46Cb = useDiv46Cb()
const TextBox15Props = useStore((state)=>state["Home"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Home"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const Div49Props = useStore((state)=>state["Home"]["Div49"]);
const Div49IoProps = useIoStore((state)=>state["Home"]["Div49"]);
const Div49Cb = useDiv49Cb()
const TextBox16Props = useStore((state)=>state["Home"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Home"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const TextBox23Props = useStore((state)=>state["Home"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["Home"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const Image21Props = useStore((state)=>state["Home"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["Home"]["Image21"]);
const Image21Cb = useImage21Cb()
const Div57Props = useStore((state)=>state["Home"]["Div57"]);
const Div57IoProps = useIoStore((state)=>state["Home"]["Div57"]);
const Div57Cb = useDiv57Cb()
const TextBox19Props = useStore((state)=>state["Home"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Home"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const Div58Props = useStore((state)=>state["Home"]["Div58"]);
const Div58IoProps = useIoStore((state)=>state["Home"]["Div58"]);
const Div58Cb = useDiv58Cb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const Div61Props = useStore((state)=>state["Home"]["Div61"]);
const Div61IoProps = useIoStore((state)=>state["Home"]["Div61"]);
const Div61Cb = useDiv61Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const TextBox22Props = useStore((state)=>state["Home"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["Home"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const Button35Props = useStore((state)=>state["Home"]["Button35"]);
const Button35IoProps = useIoStore((state)=>state["Home"]["Button35"]);
const Button35Cb = useButton35Cb()
const Button36Props = useStore((state)=>state["Home"]["Button36"]);
const Button36IoProps = useIoStore((state)=>state["Home"]["Button36"]);
const Button36Cb = useButton36Cb()
const Image22Props = useStore((state)=>state["Home"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Home"]["Image22"]);
const Image22Cb = useImage22Cb()
const BRANDINGProps = useStore((state)=>state["Home"]["BRANDING"]);
const BRANDINGIoProps = useIoStore((state)=>state["Home"]["BRANDING"]);
const BRANDINGCb = useBRANDINGCb()
const Soulful_RebrandProps = useStore((state)=>state["Home"]["Soulful_Rebrand"]);
const Soulful_RebrandIoProps = useIoStore((state)=>state["Home"]["Soulful_Rebrand"]);
const Soulful_RebrandCb = useSoulful_RebrandCb()
const Button37Props = useStore((state)=>state["Home"]["Button37"]);
const Button37IoProps = useIoStore((state)=>state["Home"]["Button37"]);
const Button37Cb = useButton37Cb()
const Image23Props = useStore((state)=>state["Home"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Home"]["Image23"]);
const Image23Cb = useImage23Cb()
const Image29Props = useStore((state)=>state["Home"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["Home"]["Image29"]);
const Image29Cb = useImage29Cb()
const Image28Props = useStore((state)=>state["Home"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["Home"]["Image28"]);
const Image28Cb = useImage28Cb()
const Button40Props = useStore((state)=>state["Home"]["Button40"]);
const Button40IoProps = useIoStore((state)=>state["Home"]["Button40"]);
const Button40Cb = useButton40Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const Image31Props = useStore((state)=>state["Home"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["Home"]["Image31"]);
const Image31Cb = useImage31Cb()
const Image30Props = useStore((state)=>state["Home"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["Home"]["Image30"]);
const Image30Cb = useImage30Cb()
const Button41Props = useStore((state)=>state["Home"]["Button41"]);
const Button41IoProps = useIoStore((state)=>state["Home"]["Button41"]);
const Button41Cb = useButton41Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const Image33Props = useStore((state)=>state["Home"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["Home"]["Image33"]);
const Image33Cb = useImage33Cb()
const Image32Props = useStore((state)=>state["Home"]["Image32"]);
const Image32IoProps = useIoStore((state)=>state["Home"]["Image32"]);
const Image32Cb = useImage32Cb()
const Button42Props = useStore((state)=>state["Home"]["Button42"]);
const Button42IoProps = useIoStore((state)=>state["Home"]["Button42"]);
const Button42Cb = useButton42Cb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const TextBox40Props = useStore((state)=>state["Home"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Home"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const Image35Props = useStore((state)=>state["Home"]["Image35"]);
const Image35IoProps = useIoStore((state)=>state["Home"]["Image35"]);
const Image35Cb = useImage35Cb()
const Image34Props = useStore((state)=>state["Home"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["Home"]["Image34"]);
const Image34Cb = useImage34Cb()
const Button43Props = useStore((state)=>state["Home"]["Button43"]);
const Button43IoProps = useIoStore((state)=>state["Home"]["Button43"]);
const Button43Cb = useButton43Cb()
const TextBox41Props = useStore((state)=>state["Home"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Home"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const Image36Props = useStore((state)=>state["Home"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["Home"]["Image36"]);
const Image36Cb = useImage36Cb()
const Image38Props = useStore((state)=>state["Home"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["Home"]["Image38"]);
const Image38Cb = useImage38Cb()
const Div115Props = useStore((state)=>state["Home"]["Div115"]);
const Div115IoProps = useIoStore((state)=>state["Home"]["Div115"]);
const Div115Cb = useDiv115Cb()
const TextBox43Props = useStore((state)=>state["Home"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Home"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const TextBox44Props = useStore((state)=>state["Home"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["Home"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const TextBox45Props = useStore((state)=>state["Home"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["Home"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()

  return (<>
  <Div className="p-Home Div1 bpt" {...Div1Props} {...Div1Cb} {...Div1IoProps}>
<Flex className="p-Home Header bpt" {...HeaderProps} {...HeaderCb} {...HeaderIoProps}>
<Flex className="p-Home Flex2 bpt" {...Flex2Props} {...Flex2Cb} {...Flex2IoProps}>
<Div className="p-Home Div2 bpt" {...Div2Props} {...Div2Cb} {...Div2IoProps}>
<Image className="p-Home Image1 bpt" {...Image1Props} {...Image1Cb} {...Image1IoProps}/>
</Div>
<Flex className="p-Home Flex3 bpt" {...Flex3Props} {...Flex3Cb} {...Flex3IoProps}>
<Button className="p-Home Button1 bpt" {...Button1Props} {...Button1Cb} {...Button1IoProps}/>
<Button className="p-Home Button2 bpt" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
<Button className="p-Home Button3 bpt" {...Button3Props} {...Button3Cb} {...Button3IoProps}/>
<Button className="p-Home Button4 bpt" {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
<Flex className="p-Home Flex4 bpt" {...Flex4Props} {...Flex4Cb} {...Flex4IoProps}>
<Button className="p-Home Button6 bpt" {...Button6Props} {...Button6Cb} {...Button6IoProps}/>
<Image className="p-Home Image3 bpt" {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Intro bpt" {...IntroProps} {...IntroCb} {...IntroIoProps}>
<Flex className="p-Home Flex22 bpt" {...Flex22Props} {...Flex22Cb} {...Flex22IoProps}>
<Flex className="p-Home Flex23 bpt" {...Flex23Props} {...Flex23Cb} {...Flex23IoProps}>
<Div className="p-Home Div13 bpt" {...Div13Props} {...Div13Cb} {...Div13IoProps}>
<TextBox className="p-Home TextBox2 bpt" {...TextBox2Props} {...TextBox2Cb} {...TextBox2IoProps}/>
<TextBox className="p-Home TextBox3 bpt" {...TextBox3Props} {...TextBox3Cb} {...TextBox3IoProps}/>
</Div>
<Div className="p-Home Div12 bpt" {...Div12Props} {...Div12Cb} {...Div12IoProps}>
<TextBox className="p-Home TextBox4 bpt" {...TextBox4Props} {...TextBox4Cb} {...TextBox4IoProps}/>
</Div>
<Flex className="p-Home Flex24 bpt" {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<Div className="p-Home Div14 bpt" {...Div14Props} {...Div14Cb} {...Div14IoProps}>
<Button className="p-Home Button28 bpt" {...Button28Props} {...Button28Cb} {...Button28IoProps}/>
<Button className="p-Home Button29 bpt" {...Button29Props} {...Button29Cb} {...Button29IoProps}/>
</Div>
<Flex className="p-Home Flex25 bpt" {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<Button className="p-Home Button32 bpt" {...Button32Props} {...Button32Cb} {...Button32IoProps}/>
<Image className="p-Home Image13 bpt" {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
</Flex>
</Flex>
</Flex>
<Div className="p-Home Div9 bpt" {...Div9Props} {...Div9Cb} {...Div9IoProps}>
<Image className="p-Home Image12 bpt" {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
</Div>
</Flex>
</Flex>
<Flex className="p-Home Trusted bpt" {...TrustedProps} {...TrustedCb} {...TrustedIoProps}>
<Flex className="p-Home Flex27 bpt" {...Flex27Props} {...Flex27Cb} {...Flex27IoProps}>
<TextBox className="p-Home TextBox6 bpt" {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
<Flex className="p-Home Flex28 bpt" {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<Div className="p-Home Div17 bpt" {...Div17Props} {...Div17Cb} {...Div17IoProps}>
<Image className="p-Home Image15 bpt" {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
</Div>
<Div className="p-Home Div20 bpt" {...Div20Props} {...Div20Cb} {...Div20IoProps}>
<Image className="p-Home Image18 bpt" {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
</Div>
<Div className="p-Home Div18 bpt" {...Div18Props} {...Div18Cb} {...Div18IoProps}>
<Image className="p-Home Image16 bpt" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
</Div>
<Div className="p-Home Div19 bpt" {...Div19Props} {...Div19Cb} {...Div19IoProps}>
<Image className="p-Home Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
</Div>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Service bpt" {...ServiceProps} {...ServiceCb} {...ServiceIoProps}>
<Flex className="p-Home Flex29 bpt" {...Flex29Props} {...Flex29Cb} {...Flex29IoProps}>
<Div className="p-Home Div24 bpt" {...Div24Props} {...Div24Cb} {...Div24IoProps}>
<Div className="p-Home Div69 bpt" {...Div69Props} {...Div69Cb} {...Div69IoProps}>
<Div className="p-Home Div70 bpt" {...Div70Props} {...Div70Cb} {...Div70IoProps}>
<TextBox className="p-Home TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
</Div>
</Div>
<Div className="p-Home Div22 bpt" {...Div22Props} {...Div22Cb} {...Div22IoProps}>
<TextBox className="p-Home TextBox8 bpt" {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
</Div>
</Div>
<Flex className="p-Home Flex30 bpt" {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}>
<Div className="p-Home Div26 bpt" {...Div26Props} {...Div26Cb} {...Div26IoProps}>
<Image className="p-Home Image19 bpt" {...Image19Props} {...Image19Cb} {...Image19IoProps}/>
<TextBox className="p-Home TextBox9 bpt" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
<Div className="p-Home Div29 bpt" {...Div29Props} {...Div29Cb} {...Div29IoProps}>
<TextBox className="p-Home TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
</Div>
<Div className="p-Home Div32 bpt" {...Div32Props} {...Div32Cb} {...Div32IoProps}>
<Div className="p-Home Div33 bpt" {...Div33Props} {...Div33Cb} {...Div33IoProps}>
<Div className="p-Home Div36 bpt" {...Div36Props} {...Div36Cb} {...Div36IoProps}/>
<Div className="p-Home Div37 bpt" {...Div37Props} {...Div37Cb} {...Div37IoProps}>
<TextBox className="p-Home TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
</Div>
</Div>
<Div className="p-Home Div40 bpt" {...Div40Props} {...Div40Cb} {...Div40IoProps}>
<Div className="p-Home Div39 bpt" {...Div39Props} {...Div39Cb} {...Div39IoProps}/>
<Div className="p-Home Div38 bpt" {...Div38Props} {...Div38Cb} {...Div38IoProps}>
<TextBox className="p-Home TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
</Div>
</Div>
<Div className="p-Home Div43 bpt" {...Div43Props} {...Div43Cb} {...Div43IoProps}>
<Div className="p-Home Div41 bpt" {...Div41Props} {...Div41Cb} {...Div41IoProps}/>
<Div className="p-Home Div42 bpt" {...Div42Props} {...Div42Cb} {...Div42IoProps}>
<TextBox className="p-Home TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
</Div>
</Div>
</Div>
</Div>
<Div className="p-Home Div55 bpt" {...Div55Props} {...Div55Cb} {...Div55IoProps}>
<Image className="p-Home Image20 bpt" {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
<TextBox className="p-Home TextBox18 bpt" {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
<Div className="p-Home Div54 bpt" {...Div54Props} {...Div54Cb} {...Div54IoProps}>
<TextBox className="p-Home TextBox17 bpt" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
</Div>
<Div className="p-Home Div53 bpt" {...Div53Props} {...Div53Cb} {...Div53IoProps}>
<Div className="p-Home Div52 bpt" {...Div52Props} {...Div52Cb} {...Div52IoProps}>
<Div className="p-Home Div49 bpt" {...Div49Props} {...Div49Cb} {...Div49IoProps}/>
<Div className="p-Home Div48 bpt" {...Div48Props} {...Div48Cb} {...Div48IoProps}>
<TextBox className="p-Home TextBox16 bpt" {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
</Div>
</Div>
<Div className="p-Home Div51 bpt" {...Div51Props} {...Div51Cb} {...Div51IoProps}>
<Div className="p-Home Div46 bpt" {...Div46Props} {...Div46Cb} {...Div46IoProps}/>
<Div className="p-Home Div47 bpt" {...Div47Props} {...Div47Cb} {...Div47IoProps}>
<TextBox className="p-Home TextBox15 bpt" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
</Div>
</Div>
<Div className="p-Home Div50 bpt" {...Div50Props} {...Div50Cb} {...Div50IoProps}>
<Div className="p-Home Div45 bpt" {...Div45Props} {...Div45Cb} {...Div45IoProps}/>
<Div className="p-Home Div44 bpt" {...Div44Props} {...Div44Cb} {...Div44IoProps}>
<TextBox className="p-Home TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
</Div>
</Div>
</Div>
</Div>
<Div className="p-Home Div67 bpt" {...Div67Props} {...Div67Cb} {...Div67IoProps}>
<Image className="p-Home Image21 bpt" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
<TextBox className="p-Home TextBox23 bpt" {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
<Div className="p-Home Div66 bpt" {...Div66Props} {...Div66Cb} {...Div66IoProps}>
<TextBox className="p-Home TextBox22 bpt" {...TextBox22Props} {...TextBox22Cb} {...TextBox22IoProps}/>
</Div>
<Div className="p-Home Div65 bpt" {...Div65Props} {...Div65Cb} {...Div65IoProps}>
<Div className="p-Home Div64 bpt" {...Div64Props} {...Div64Cb} {...Div64IoProps}>
<Div className="p-Home Div61 bpt" {...Div61Props} {...Div61Cb} {...Div61IoProps}/>
<Div className="p-Home Div60 bpt" {...Div60Props} {...Div60Cb} {...Div60IoProps}>
<TextBox className="p-Home TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
</Div>
</Div>
<Div className="p-Home Div63 bpt" {...Div63Props} {...Div63Cb} {...Div63IoProps}>
<Div className="p-Home Div58 bpt" {...Div58Props} {...Div58Cb} {...Div58IoProps}/>
<Div className="p-Home Div59 bpt" {...Div59Props} {...Div59Cb} {...Div59IoProps}>
<TextBox className="p-Home TextBox20 bpt" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
</Div>
</Div>
<Div className="p-Home Div62 bpt" {...Div62Props} {...Div62Cb} {...Div62IoProps}>
<Div className="p-Home Div57 bpt" {...Div57Props} {...Div57Cb} {...Div57IoProps}/>
<Div className="p-Home Div56 bpt" {...Div56Props} {...Div56Cb} {...Div56IoProps}>
<TextBox className="p-Home TextBox19 bpt" {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
</Div>
</Div>
</Div>
</Div>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Projects bpt" {...ProjectsProps} {...ProjectsCb} {...ProjectsIoProps}>
<Flex className="p-Home Flex35 bpt" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<Div className="p-Home Div74 bpt" {...Div74Props} {...Div74Cb} {...Div74IoProps}>
<Div className="p-Home Div76 bpt" {...Div76Props} {...Div76Cb} {...Div76IoProps}>
<TextBox className="p-Home TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
</Div>
<Div className="p-Home Div77 bpt" {...Div77Props} {...Div77Cb} {...Div77IoProps}>
<TextBox className="p-Home TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<TextBox className="p-Home TextBox28 bpt" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
</Div>
</Div>
<Div className="p-Home Div75 bpt" {...Div75Props} {...Div75Cb} {...Div75IoProps}>
<Button className="p-Home Button35 bpt" {...Button35Props} {...Button35Cb} {...Button35IoProps}/>
<Button className="p-Home Button36 bpt" {...Button36Props} {...Button36Cb} {...Button36IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex43 bpt" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<Flex className="p-Home Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<Flex className="p-Home Flex36 bpt" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<Image className="p-Home Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
<Div className="p-Home Div79 bpt" {...Div79Props} {...Div79Cb} {...Div79IoProps}>
<Div className="p-Home Div80 bpt" {...Div80Props} {...Div80Cb} {...Div80IoProps}>
<TextBox className="p-Home BRANDING bpt" {...BRANDINGProps} {...BRANDINGCb} {...BRANDINGIoProps}/>
</Div>
<Div className="p-Home Div81 bpt" {...Div81Props} {...Div81Cb} {...Div81IoProps}>
<TextBox className="p-Home Soulful_Rebrand bpt" {...Soulful_RebrandProps} {...Soulful_RebrandCb} {...Soulful_RebrandIoProps}/>
</Div>
<Div className="p-Home Div83 bpt" {...Div83Props} {...Div83Cb} {...Div83IoProps}>
<Button className="p-Home Button37 bpt" {...Button37Props} {...Button37Cb} {...Button37IoProps}/>
<Image className="p-Home Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
</Div>
</Div>
</Flex>
<Flex className="p-Home Flex39 bpt" {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<Image className="p-Home Image29 bpt" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
<Div className="p-Home Div95 bpt" {...Div95Props} {...Div95Cb} {...Div95IoProps}>
<Div className="p-Home Div94 bpt" {...Div94Props} {...Div94Cb} {...Div94IoProps}>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
</Div>
<Div className="p-Home Div93 bpt" {...Div93Props} {...Div93Cb} {...Div93IoProps}>
<TextBox className="p-Home TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
</Div>
<Div className="p-Home Div92 bpt" {...Div92Props} {...Div92Cb} {...Div92IoProps}>
<Button className="p-Home Button40 bpt" {...Button40Props} {...Button40Cb} {...Button40IoProps}/>
<Image className="p-Home Image28 bpt" {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
</Div>
</Div>
</Flex>
<Flex className="p-Home Flex40 bpt" {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<Image className="p-Home Image31 bpt" {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
<Div className="p-Home Div99 bpt" {...Div99Props} {...Div99Cb} {...Div99IoProps}>
<Div className="p-Home Div98 bpt" {...Div98Props} {...Div98Cb} {...Div98IoProps}>
<TextBox className="p-Home TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
</Div>
<Div className="p-Home Div97 bpt" {...Div97Props} {...Div97Cb} {...Div97IoProps}>
<TextBox className="p-Home TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
</Div>
<Div className="p-Home Div96 bpt" {...Div96Props} {...Div96Cb} {...Div96IoProps}>
<Button className="p-Home Button41 bpt" {...Button41Props} {...Button41Cb} {...Button41IoProps}/>
<Image className="p-Home Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
</Div>
</Div>
</Flex>
<Flex className="p-Home Flex41 bpt" {...Flex41Props} {...Flex41Cb} {...Flex41IoProps}>
<Image className="p-Home Image33 bpt" {...Image33Props} {...Image33Cb} {...Image33IoProps}/>
<Div className="p-Home Div103 bpt" {...Div103Props} {...Div103Cb} {...Div103IoProps}>
<Div className="p-Home Div102 bpt" {...Div102Props} {...Div102Cb} {...Div102IoProps}>
<TextBox className="p-Home TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
</Div>
<Div className="p-Home Div101 bpt" {...Div101Props} {...Div101Cb} {...Div101IoProps}>
<TextBox className="p-Home TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
</Div>
<Div className="p-Home Div100 bpt" {...Div100Props} {...Div100Cb} {...Div100IoProps}>
<Button className="p-Home Button42 bpt" {...Button42Props} {...Button42Cb} {...Button42IoProps}/>
<Image className="p-Home Image32 bpt" {...Image32Props} {...Image32Cb} {...Image32IoProps}/>
</Div>
</Div>
</Flex>
<Flex className="p-Home Flex42 bpt" {...Flex42Props} {...Flex42Cb} {...Flex42IoProps}>
<Image className="p-Home Image35 bpt" {...Image35Props} {...Image35Cb} {...Image35IoProps}/>
<Div className="p-Home Div107 bpt" {...Div107Props} {...Div107Cb} {...Div107IoProps}>
<Div className="p-Home Div106 bpt" {...Div106Props} {...Div106Cb} {...Div106IoProps}>
<TextBox className="p-Home TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
</Div>
<Div className="p-Home Div105 bpt" {...Div105Props} {...Div105Cb} {...Div105IoProps}>
<TextBox className="p-Home TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
</Div>
<Div className="p-Home Div104 bpt" {...Div104Props} {...Div104Cb} {...Div104IoProps}>
<Button className="p-Home Button43 bpt" {...Button43Props} {...Button43Cb} {...Button43IoProps}/>
<Image className="p-Home Image34 bpt" {...Image34Props} {...Image34Cb} {...Image34IoProps}/>
</Div>
</Div>
</Flex>
</Flex>
<Flex className="p-Home Flex44 bpt" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<Div className="p-Home Div110 bpt" {...Div110Props} {...Div110Cb} {...Div110IoProps}>
<Image className="p-Home Image36 bpt" {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Div className="p-Home Div112 bpt" {...Div112Props} {...Div112Cb} {...Div112IoProps}>
<Image className="p-Home Image38 bpt" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
</Div>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Blog bpt" {...BlogProps} {...BlogCb} {...BlogIoProps}>
<Flex className="p-Home Flex46 bpt" {...Flex46Props} {...Flex46Cb} {...Flex46IoProps}>
<Div className="p-Home Div114 bpt" {...Div114Props} {...Div114Cb} {...Div114IoProps}>
<Div className="p-Home Div116 bpt" {...Div116Props} {...Div116Cb} {...Div116IoProps}>
<TextBox className="p-Home TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
</Div>
<Div className="p-Home Div117 bpt" {...Div117Props} {...Div117Cb} {...Div117IoProps}>
<TextBox className="p-Home TextBox44 bpt" {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
</Div>
<Div className="p-Home Div118 bpt" {...Div118Props} {...Div118Cb} {...Div118IoProps}>
<TextBox className="p-Home TextBox45 bpt" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
</Div>
</Div>
<Div className="p-Home Div115 bpt" {...Div115Props} {...Div115Cb} {...Div115IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex32 bpt" {...Flex32Props} {...Flex32Cb} {...Flex32IoProps}/>
</Div>
  </>);
}
