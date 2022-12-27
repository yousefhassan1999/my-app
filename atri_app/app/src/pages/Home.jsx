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
import { useDiv1Cb, useHeaderCb, useFlex2Cb, useDiv2Cb, useFlex3Cb, useFlex4Cb, useFlex14Cb, useFlex22Cb, useFlex23Cb, useDiv12Cb, useDiv13Cb, useFlex24Cb, useDiv14Cb, useFlex25Cb, useDiv9Cb, useFlex19Cb, useFlex27Cb, useFlex28Cb, useDiv17Cb, useDiv18Cb, useDiv19Cb, useDiv20Cb, useFlex20Cb, useFlex21Cb, useImage1Cb, useButton1Cb, useButton2Cb, useButton3Cb, useButton4Cb, useButton6Cb, useImage3Cb, useTextBox4Cb, useTextBox2Cb, useTextBox3Cb, useButton28Cb, useButton29Cb, useButton32Cb, useImage13Cb, useImage12Cb, useTextBox6Cb, useImage15Cb, useImage16Cb, useImage17Cb, useImage18Cb } from "../page-cbs/Home";
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
const Flex14Props = useStore((state)=>state["Home"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Home"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
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
const Flex19Props = useStore((state)=>state["Home"]["Flex19"]);
const Flex19IoProps = useIoStore((state)=>state["Home"]["Flex19"]);
const Flex19Cb = useFlex19Cb()
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
const Flex20Props = useStore((state)=>state["Home"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["Home"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const Flex21Props = useStore((state)=>state["Home"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["Home"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
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
<Flex className="p-Home Flex14 bpt" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
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
<Flex className="p-Home Flex19 bpt" {...Flex19Props} {...Flex19Cb} {...Flex19IoProps}>
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
<Flex className="p-Home Flex20 bpt" {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}/>
<Flex className="p-Home Flex21 bpt" {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}/>
</Div>
  </>);
}
