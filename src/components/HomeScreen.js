import React from "react";
import {
  Button,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Box,
  TextField,
} from "@mui/material";
import "./homescreen.css";
import { withStyles } from "@mui/styles";
import IconSvg from "./../assets/icon.svg";
import Image1 from "./../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpeg";
import Image4 from "../assets/Image4.jpg";
import Image5 from "../assets/Image5.jpeg";
import phone from "../assets/phone.png";

const styled = (theme) => ({
  buttonPadding: {
    padding: "30px",
  },
  more: {
    textAlign: "center",
  },
});

function HomeScreen(props) {
  const { classes } = props;
  return (
    <div style={styles.outerwrapper}>
      <div
        id="w-node-ca850897-97af-cccd-0876-e55de8024ec1-7513bcd0"
        class="wrapper-container inner-padding-small snipcss-oG61U"
      >
        <div class="container header w-container">
          <h1 class="heading-xlarge _16-ch snip-h1">
            <font>
              <font>Give your website superpowers.</font>
            </font>
          </h1>
          <div class="w-layout-grid grid-buttons inner-padding-small">
            <a
              href="#"
              class="link-wrapper text-white button color-red w-inline-block snip-a"
            >
              <div>
                <font>
                  <font>To start</font>
                </font>
              </div>
              <img
                src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874dcd9813bcfb_cta-arrow-white.svg"
                loading="lazy"
                alt=""
                class="icon-arrow snip-img"
              />
            </a>
            <a
              href="#"
              id="w-node-f978dd1c-8e89-3c5c-6a5a-012b8f08b031-7513bcd0"
              class="link-wrapper text-white lightbox-link w-inline-block w-lightbox snip-a"
            >
              <img
                src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d761f13bccd_icon-play.svg"
                loading="lazy"
                alt=""
                class="icon-play-button snip-img"
              />
              <div>
                <font>
                  <font>See the demo</font>
                </font>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="imageLoops">
        <div className="imageRail non-rev">
          <img style={{ maxHeight: "38vh" }} src={Image1} alt="" />
          <img style={{ maxHeight: "38vh" }} src={Image2} alt="" />
          <img style={{ maxHeight: "38vh" }} src={Image3} alt="" />
          <img style={{ maxHeight: "38vh" }} src={Image4} alt="" />
          <img style={{ maxHeight: "38vh" }} src={Image5} alt="" />
          <img style={{ maxHeight: "38vh" }} src={Image1} alt="" />
          <img style={{ maxHeight: "38vh" }} src={Image2} alt="" />
          <img style={{ maxHeight: "38vh" }} src={Image3} alt="" />
          <img style={{ maxHeight: "38vh" }} src={Image4} alt="" />
          <img style={{ maxHeight: "38vh" }} src={Image5} alt="" />
        </div>
        <div className="imageRail rev">
          <img style={{ maxHeight: "38vh" }} src={Image1} alt="" />
          <img style={{ maxHeight: "38vh" }} src={Image2} alt="" />
          <img style={{ maxHeight: "38vh" }} src={Image3} alt="" />
          <img style={{ maxHeight: "38vh" }} src={Image4} alt="" />
          <img style={{ maxHeight: "38vh" }} src={Image5} alt="" />
          <img style={{ maxHeight: "38vh" }} src={Image1} alt="" />
          <img style={{ maxHeight: "38vh" }} src={Image2} alt="" />
          <img style={{ maxHeight: "38vh" }} src={Image3} alt="" />
          <img style={{ maxHeight: "38vh" }} src={Image4} alt="" />
          <img style={{ maxHeight: "38vh" }} src={Image5} alt="" />
        </div>
        <div
          id="w-node-d68f6320-2373-2433-0132-2ed5f3b9de3d-7513bcd0"
          class="device-wrapper"
        >
          <div>
            <img
              src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d7cc413be57_visual-ui-017.png"
              loading="lazy"
              alt=""
              class="image-iphone"
            />
          </div>
        </div>
      </div> */}

      

<div class="w-layout-grid hero-grid-header snipcss-Popm6">
  <div id="w-node-b3fdc0c4-7162-b493-f01a-ac52dffe4cd2-7513bcd0" class="hero-images-wrapper">
    <div class="hero-rail">
      <div  class="rail-wrapper-reverse">
        <div class="w-layout-grid grid-rail">
          <div class="frame-image-overflow no-frame">
            <img src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d5ff613be47_jj-jordan-hINQgaTqg7Q-unsplash.jpg" loading="lazy" sizes="(max-width: 479px) 25vw, (max-width: 991px) 35vw, 25vw" srcset="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d5ff613be47_jj-jordan-hINQgaTqg7Q-unsplash-p-500.jpeg 500w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d5ff613be47_jj-jordan-hINQgaTqg7Q-unsplash.jpg 800w" alt="" class="image-tiles-hero _3d snip-img"  />
          </div>
          <div id="w-node-b3fdc0c4-7162-b493-f01a-ac52dffe4cd7-7513bcd0" class="frame-image-overflow no-frame">
            <img src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d9d3a13be54_stewart-maclean-IOIfczHu3D0-unsplash.jpg" loading="lazy" sizes="(max-width: 479px) 25vw, (max-width: 991px) 35vw, 25vw" srcset="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d9d3a13be54_stewart-maclean-IOIfczHu3D0-unsplash-p-500.jpeg 500w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d9d3a13be54_stewart-maclean-IOIfczHu3D0-unsplash-p-800.jpeg 800w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d9d3a13be54_stewart-maclean-IOIfczHu3D0-unsplash.jpg 1000w" alt="" class="image-tiles-hero _3d-reverse snip-img"  />
          </div>
          <div class="frame-image-overflow no-frame">
            <img src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d68c813be09_scene-abstract-3d-geometrical-background.jpg" loading="lazy" sizes="(max-width: 479px) 25vw, (max-width: 991px) 35vw, 25vw" srcset="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d68c813be09_scene-abstract-3d-geometrical-background-p-500.jpeg 500w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d68c813be09_scene-abstract-3d-geometrical-background-p-800.jpeg 800w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d68c813be09_scene-abstract-3d-geometrical-background-p-1080.jpeg 1080w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d68c813be09_scene-abstract-3d-geometrical-background.jpg 1200w" alt="" class="image-tiles-hero _3d-flip snip-img"  />
          </div>
          <div class="frame-image-overflow no-frame">
            <img src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d1d9e13be4c_mae-mu-Rz5o0osnN6Q-unsplash.jpg" loading="lazy" sizes="(max-width: 479px) 25vw, (max-width: 991px) 35vw, 25vw" srcset="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d1d9e13be4c_mae-mu-Rz5o0osnN6Q-unsplash-p-500.jpeg 500w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d1d9e13be4c_mae-mu-Rz5o0osnN6Q-unsplash-p-800.jpeg 800w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d1d9e13be4c_mae-mu-Rz5o0osnN6Q-unsplash-p-1080.jpeg 1080w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d1d9e13be4c_mae-mu-Rz5o0osnN6Q-unsplash.jpg 1200w" alt="" class="image-tiles-hero _3d-reverse snip-img"  />
          </div>
          <div class="frame-image-overflow no-frame">
            <img src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d0aef13bcb0_vino-li-pCjw_ygKCv0-unsplash.jpg" loading="lazy" sizes="(max-width: 479px) 25vw, (max-width: 991px) 35vw, 25vw" srcset="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d0aef13bcb0_vino-li-pCjw_ygKCv0-unsplash-p-500.jpeg 500w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d0aef13bcb0_vino-li-pCjw_ygKCv0-unsplash.jpg 800w" alt="" class="image-tiles-hero _3d-reverse snip-img"  />
          </div>
        </div>
      </div>
      <div  class="rail-wrapper-reverse">
        <div class="w-layout-grid grid-rail">
          <div class="frame-image-overflow no-frame">
            <img src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d5ff613be47_jj-jordan-hINQgaTqg7Q-unsplash.jpg" loading="lazy" sizes="(max-width: 479px) 25vw, (max-width: 991px) 35vw, 25vw" srcset="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d5ff613be47_jj-jordan-hINQgaTqg7Q-unsplash-p-500.jpeg 500w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d5ff613be47_jj-jordan-hINQgaTqg7Q-unsplash.jpg 800w" alt="" class="image-tiles-hero _3d snip-img"  />
          </div>
          <div id="w-node-f7cb9ac5-0411-fb4d-7650-b7aaa956b9a6-7513bcd0" class="frame-image-overflow no-frame">
            <img src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d9d3a13be54_stewart-maclean-IOIfczHu3D0-unsplash.jpg" loading="lazy" sizes="(max-width: 479px) 25vw, (max-width: 991px) 35vw, 25vw" srcset="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d9d3a13be54_stewart-maclean-IOIfczHu3D0-unsplash-p-500.jpeg 500w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d9d3a13be54_stewart-maclean-IOIfczHu3D0-unsplash-p-800.jpeg 800w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d9d3a13be54_stewart-maclean-IOIfczHu3D0-unsplash.jpg 1000w" alt="" class="image-tiles-hero _3d-reverse snip-img"  />
          </div>
          <div class="frame-image-overflow no-frame">
            <img src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d68c813be09_scene-abstract-3d-geometrical-background.jpg" loading="lazy" sizes="(max-width: 479px) 25vw, (max-width: 991px) 35vw, 25vw" srcset="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d68c813be09_scene-abstract-3d-geometrical-background-p-500.jpeg 500w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d68c813be09_scene-abstract-3d-geometrical-background-p-800.jpeg 800w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d68c813be09_scene-abstract-3d-geometrical-background-p-1080.jpeg 1080w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d68c813be09_scene-abstract-3d-geometrical-background.jpg 1200w" alt="" class="image-tiles-hero _3d-flip snip-img"  />
          </div>
          <div class="frame-image-overflow no-frame">
            <img src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d1d9e13be4c_mae-mu-Rz5o0osnN6Q-unsplash.jpg" loading="lazy" sizes="(max-width: 479px) 25vw, (max-width: 991px) 35vw, 25vw" srcset="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d1d9e13be4c_mae-mu-Rz5o0osnN6Q-unsplash-p-500.jpeg 500w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d1d9e13be4c_mae-mu-Rz5o0osnN6Q-unsplash-p-800.jpeg 800w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d1d9e13be4c_mae-mu-Rz5o0osnN6Q-unsplash-p-1080.jpeg 1080w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d1d9e13be4c_mae-mu-Rz5o0osnN6Q-unsplash.jpg 1200w" alt="" class="image-tiles-hero _3d-reverse snip-img"  />
          </div>
          <div class="frame-image-overflow no-frame">
            <img src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d0aef13bcb0_vino-li-pCjw_ygKCv0-unsplash.jpg" loading="lazy" sizes="(max-width: 479px) 25vw, (max-width: 991px) 35vw, 25vw" srcset="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d0aef13bcb0_vino-li-pCjw_ygKCv0-unsplash-p-500.jpeg 500w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d0aef13bcb0_vino-li-pCjw_ygKCv0-unsplash.jpg 800w" alt="" class="image-tiles-hero _3d-reverse snip-img"  />
          </div>
        </div>
      </div>
    </div>
    <div class="hero-rail">
      <div class="rail-wrapper" >
        <div class="w-layout-grid grid-rail">
          <div class="frame-image-overflow no-frame">
            <img src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d4bb113be38_isaac-quesada-w8--SP1DLEw-unsplash.jpg" loading="lazy" alt="" class="image-tiles-hero _3d-reverse snip-img"  />
          </div>
          <div id="w-node-c463e99f-f45d-6b6f-b6aa-deeba0869846-7513bcd0" class="frame-image-overflow no-frame">
            <img src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d159513bd9b_griffin-wooldridge-xV78-upne7k-unsplash.jpg" loading="lazy" sizes="(max-width: 479px) 25vw, (max-width: 991px) 35vw, 25vw" srcset="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d159513bd9b_griffin-wooldridge-xV78-upne7k-unsplash-p-500.jpeg 500w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d159513bd9b_griffin-wooldridge-xV78-upne7k-unsplash-p-800.jpeg 800w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d159513bd9b_griffin-wooldridge-xV78-upne7k-unsplash-p-1080.jpeg 1080w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d159513bd9b_griffin-wooldridge-xV78-upne7k-unsplash.jpg 1200w" alt="" class="image-tiles-hero _3d snip-img"  />
          </div>
          <div class="frame-image-overflow no-frame">
            <img src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d4e4513bd99_engin-akyurt-G26eJNYZA24-unsplash.jpg" loading="lazy" sizes="(max-width: 479px) 25vw, (max-width: 991px) 35vw, 25vw" srcset="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d4e4513bd99_engin-akyurt-G26eJNYZA24-unsplash-p-500.jpeg 500w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d4e4513bd99_engin-akyurt-G26eJNYZA24-unsplash.jpg 900w" alt="" class="image-tiles-hero _3d-flip snip-img"  />
          </div>
          <div class="frame-image-overflow no-frame">
            <img src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d932313bd9a_kaysha-OJvh3njqTTQ-unsplash.jpg" loading="lazy" sizes="(max-width: 479px) 25vw, (max-width: 991px) 35vw, 25vw" srcset="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d932313bd9a_kaysha-OJvh3njqTTQ-unsplash-p-500.jpeg 500w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d932313bd9a_kaysha-OJvh3njqTTQ-unsplash-p-800.jpeg 800w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d932313bd9a_kaysha-OJvh3njqTTQ-unsplash-p-1080.jpeg 1080w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d932313bd9a_kaysha-OJvh3njqTTQ-unsplash.jpg 1200w" alt="" class="image-tiles-hero snip-img" />
          </div>
          <div class="frame-image-overflow no-frame">
            <img src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874dff2913bd9e_young-woman-holding-green-leaves.jpg" loading="lazy" sizes="(max-width: 479px) 25vw, (max-width: 991px) 35vw, 25vw" srcset="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874dff2913bd9e_young-woman-holding-green-leaves-p-500.jpeg 500w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874dff2913bd9e_young-woman-holding-green-leaves.jpg 1600w" alt="" class="image-tiles-hero _3d-reverse snip-img"  />
          </div>
        </div>
      </div>
      <div class="rail-wrapper" >
        <div class="w-layout-grid grid-rail">
          <div class="frame-image-overflow no-frame">
            <img src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d29d913bd9c_isaac-quesada-w8--SP1DLEw-unsplash.jpg" loading="lazy" sizes="(max-width: 479px) 25vw, (max-width: 991px) 35vw, 25vw" srcset="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d29d913bd9c_isaac-quesada-w8--SP1DLEw-unsplash-p-500.jpeg 500w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d29d913bd9c_isaac-quesada-w8--SP1DLEw-unsplash-p-800.jpeg 800w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d29d913bd9c_isaac-quesada-w8--SP1DLEw-unsplash-p-1080.jpeg 1080w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d29d913bd9c_isaac-quesada-w8--SP1DLEw-unsplash.jpg 1200w" alt="" class="image-tiles-hero _3d-reverse snip-img"  />
          </div>
          <div id="w-node-fdb465fa-d02a-6a07-1133-2ec869fc53ac-7513bcd0" class="frame-image-overflow no-frame">
            <img src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d159513bd9b_griffin-wooldridge-xV78-upne7k-unsplash.jpg" loading="lazy" sizes="(max-width: 479px) 25vw, (max-width: 991px) 35vw, 25vw" srcset="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d159513bd9b_griffin-wooldridge-xV78-upne7k-unsplash-p-500.jpeg 500w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d159513bd9b_griffin-wooldridge-xV78-upne7k-unsplash-p-800.jpeg 800w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d159513bd9b_griffin-wooldridge-xV78-upne7k-unsplash-p-1080.jpeg 1080w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d159513bd9b_griffin-wooldridge-xV78-upne7k-unsplash.jpg 1200w" alt="" class="image-tiles-hero _3d snip-img"  />
          </div>
          <div class="frame-image-overflow no-frame">
            <img src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d4e4513bd99_engin-akyurt-G26eJNYZA24-unsplash.jpg" loading="lazy" sizes="(max-width: 479px) 25vw, (max-width: 991px) 35vw, 25vw" srcset="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d4e4513bd99_engin-akyurt-G26eJNYZA24-unsplash-p-500.jpeg 500w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d4e4513bd99_engin-akyurt-G26eJNYZA24-unsplash.jpg 900w" alt="" class="image-tiles-hero _3d-flip snip-img"  />
          </div>
          <div class="frame-image-overflow no-frame">
            <img src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d932313bd9a_kaysha-OJvh3njqTTQ-unsplash.jpg" loading="lazy" sizes="(max-width: 479px) 25vw, (max-width: 991px) 35vw, 25vw" srcset="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d932313bd9a_kaysha-OJvh3njqTTQ-unsplash-p-500.jpeg 500w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d932313bd9a_kaysha-OJvh3njqTTQ-unsplash-p-800.jpeg 800w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d932313bd9a_kaysha-OJvh3njqTTQ-unsplash-p-1080.jpeg 1080w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d932313bd9a_kaysha-OJvh3njqTTQ-unsplash.jpg 1200w" alt="" class="image-tiles-hero snip-img" />
          </div>
          <div class="frame-image-overflow no-frame">
            <img src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874dff2913bd9e_young-woman-holding-green-leaves.jpg" loading="lazy" sizes="(max-width: 479px) 25vw, (max-width: 991px) 35vw, 25vw" srcset="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874dff2913bd9e_young-woman-holding-green-leaves-p-500.jpeg 500w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874dff2913bd9e_young-woman-holding-green-leaves.jpg 1600w" alt="" class="image-tiles-hero _3d-reverse snip-img"  />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="w-node-d68f6320-2373-2433-0132-2ed5f3b9de3d-7513bcd0" class="device-wrapper">
    <div>
      <img src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d7cc413be57_visual-ui-017.png" loading="lazy" alt="" class="image-iphone snip-img" />
    </div>
  </div>
</div>

      <div class="container w-container">
        <div class="w-layout-grid main-grid inner-padding-medium">
          <div
            id="w-node-_9fb79094-a69c-8ade-6620-ac4f461b56ed-7513bcd0"
            class="image-grid-wrapper rounded"
          >
            <img
              src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d7a1613be56_visual-ui-018.png"
              loading="lazy"
              sizes="(max-width: 479px) 87vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, 95vw"
              srcset="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d7a1613be56_visual-ui-018-p-500.png 500w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d7a1613be56_visual-ui-018.png 800w"
              alt=""
              class="full-image"
            />
          </div>
          <div
            id="w-node-_9fb79094-a69c-8ade-6620-ac4f461b56ef-7513bcd0"
            class="grid-wrapper"
          >
            <div class="paragraph-wrapper margin-bottom-xsmall">
              <h3 class="heading-xlarge">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    To construct.
                  </font>
                </font>
              </h3>
              <p class="main-paragraph bold secondary-text">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    Sed posuere consectetur est at lobortis Aenean eu leo
                    ​​quam.
                  </font>
                  <font style={{ verticalAlign: "inherit" }}>
                    Pellentesque ornare sem lacinia quam venenatis
                  </font>
                </font>
              </p>
              <a href="#" className="link-wrapper text-white w-inline-block">
                <div>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>learn more</font>
                  </font>
                </div>
                <img
                  src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874dcd9813bcfb_cta-arrow-white.svg"
                  loading="lazy"
                  alt=""
                  class="icon-arrow"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="container w-container snipcss-TSXZB">
        <div class="w-layout-grid main-grid">
          <div
            id="w-node-_437558d3-8632-0fbd-a308-c693fe286b88-7513bcd0"
            class="gray-wrapper float-bottom"
          >
            <div class="w-layout-grid content-grid gap-short">
              <div
                id="w-node-ef93fe5d-34c7-3c78-f839-6bbfda572347-7513bcd0"
                class="paragraph-wrapper align-center half"
              >
                <h2 class="heading-medium snip-h2">
                  <font>
                    <font>Where Creativity Meets Productivity</font>
                  </font>
                </h2>
                <p class="main-paragraph snip-p">
                  <font>
                    <font>
                      Nullam quis risus eget urna mollis ornare vel eu leo cras
                      justo odio dapibus ac facilisis in egestas eget quam.
                    </font>
                  </font>
                </p>
              </div>
              <div
                id="w-node-f1c6e4f9-a895-85a7-a4ab-7bbe061b7e6a-7513bcd0"
                class="images-features-wrapper"
              >
                <img
                  src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d85d013be39_visual-ui-016.png"
                  loading="lazy"
                  height=""
                  alt=""
                  class="image-features max-width snip-img"
                />
              </div>
            </div>
          </div>
          <div
            id="w-node-_08d33862-878c-8277-22a8-f994ce27c920-7513bcd0"
            class="gray-wrapper float-bottom"
          >
            <div class="w-layout-grid content-grid gap-short">
              <div class="paragraph-wrapper margin-bottom-small">
                <h2 class="heading-medium snip-h3">
                  <font>
                    <font>Reduce costs and resources</font>
                  </font>
                </h2>
                <p class="main-paragraph snip-p">
                  <font>
                    <font>Aenean lacinia bibendum nulla sed consectetur.</font>
                    <font>Sed posuere consectetur est at lobortis.</font>
                  </font>
                </p>
              </div>
              <div
                id="w-node-_70b92a9f-b7c6-8770-e5d3-a6c4007ae156-7513bcd0"
                class="images-features-wrapper"
              >
                <img
                  src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d85d013be39_visual-ui-016.png"
                  loading="lazy"
                  alt=""
                  class="image-features snip-img"
                />
              </div>
            </div>
          </div>
          <div
            id="w-node-_0609013d-5310-d81d-dad0-4e6150d692d9-7513bcd0"
            class="gray-wrapper float-bottom"
          >
            <div class="w-layout-grid content-grid gap-short">
              <div class="paragraph-wrapper margin-bottom-small">
                <h2 class="heading-medium snip-h3">
                  <font>
                    <font>New design possibilities</font>
                  </font>
                </h2>
                <p class="main-paragraph snip-p">
                  <font>
                    <font>
                      Sed posuere consectetur est at lobortis onec id elit non
                      mi porta gravida at eget metus urabitur blandit tempus
                      porttitor.
                    </font>
                  </font>
                </p>
              </div>
              <div
                id="w-node-_0609013d-5310-d81d-dad0-4e6150d692e0-7513bcd0"
                class="images-features-wrapper"
              >
                <img
                  src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874dc56113be58_visual-ui-019.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 77vw, (max-width: 767px) 71vw, (max-width: 991px) 73vw, 77vw"
                  srcset="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874dc56113be58_visual-ui-019-p-500.png 500w, https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874dc56113be58_visual-ui-019.png 1385w"
                  alt=""
                  class="image-features snip-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container w-container snipcss-QdAhw">
        <div class="bg-blue rounded">
          <div class="w-layout-grid-form main-grid-form inner-padding-small">
            <div
              id="w-node-_5e747d09-f72a-02e8-e5ae-78d2476c889c-476c889a"
              class="wrapper-call-to-action inner-padding-small"
            >
              <h3 class="heading-medium _20-ch margin-bottom-xsmall snip-h3">
                <font>
                  <font>Join over 2 million people creating with Musk</font>
                </font>
              </h3>
              <div class="form-block w-form">
                <form
                  id="wf-form-Join-Musk-Form"
                  name="wf-form-Join-Musk-Form"
                  data-name="Join Musk Form"
                  method="get"
                  class="form"
                >
                  <input
                    type="text"
                    class="text-field w-input"
                    maxlength="256"
                    name="Name"
                    data-name="Name"
                    placeholder="Enter your name"
                    id="Name"
                    required=""
                  />
                  <input
                    type="email"
                    class="text-field w-input"
                    maxlength="256"
                    name="Email"
                    data-name="Email"
                    placeholder="Enter your e-mail"
                    id="Email-4"
                    required=""
                  />
                  <font>
                    <input
                      type="submit"
                      value="To start"
                      data-wait="Please wait..."
                      class="button color-red w-button"
                    />
                  </font>
                </form>
                <div class="success rounded w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div class="error w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="section wf-section snipcss-acl6Y">
        <div class="container footer w-container">
          <div class="w-layout-grid main-grid inner-padding-small">
            <div
              id="w-node-_2bca43ef-7cde-b5da-b1b2-716107bf8e46-07bf8e43"
              class="grid-wrapper"
            >
              <img
                src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d0b7913bcfa_Musk-logo.svg"
                loading="lazy"
                alt=""
                class="logo-footer snip-img"
              />
              <p class="main-paragraph snip-p">
                <font>
                  <font>
                    Musk is a first-class web flow template designed for SaaS
                    businesses.
                  </font>
                </font>
              </p>
            </div>
            <div
              id="w-node-_2bca43ef-7cde-b5da-b1b2-716107bf8e80-07bf8e43"
              class="footer-inner"
            >
              <div class="small-legal-text">
                <font>
                  <font>© Abyow — DEVELOPED BY</font>
                </font>
                <a href="http://www.webflow.com" target="_blank" class="snip-a">
                  <font>
                    <font>WEBFLOW</font>
                  </font>
                </a>
              </div>
              <div class="span-divider"></div>
              <div class="small-legal-text">
                <font>
                  <font>CREATED BY&nbsp;</font>
                </font>
                <a
                  href="https://webflow.com/templates/designers/jp"
                  class="text-white snip-a"
                >
                  <font>
                    <font>JP</font>
                  </font>
                </a>
              </div>
            </div>
            <div
              id="w-node-_2bca43ef-7cde-b5da-b1b2-716107bf8e83-07bf8e43"
              class="footer-inner"
            >
              <div class="w-layout-grid grid-buttons social">
                <a
                  id="w-node-_2bca43ef-7cde-b5da-b1b2-716107bf8e85-07bf8e43"
                  href="#"
                  class="link-icons center w-inline-block snip-a"
                >
                  <img
                    src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874d11e613bcfc_ic-facebook-white.svg"
                    loading="lazy"
                    alt=""
                    class="icon-social snip-img"
                  />
                </a>
                <a
                  href="#"
                  class="link-wrapper text-white link-icons center w-inline-block snip-a"
                >
                  <img
                    src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874db2a313bcfd_ic-instagram-white.svg"
                    loading="lazy"
                    alt=""
                    class="icon-social snip-img"
                  />
                </a>
                <a
                  href="#"
                  class="link-wrapper text-white link-icons center w-inline-block snip-a"
                >
                  <img
                    src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874dd86413bcff_ic-twitter-white.svg"
                    loading="lazy"
                    alt=""
                    class="icon-social snip-img"
                  />
                </a>
                <a
                  href="#"
                  class="link-wrapper text-white link-icons center w-inline-block snip-a"
                >
                  <img
                    src="https://assets.website-files.com/6112bc67b1874d6c8113bc7c/6112bc67b1874de67513bcfe_ic-linkedin-white.svg"
                    loading="lazy"
                    alt=""
                    class="icon-social snip-img"
                  />
                </a>
              </div>
            </div>
            <div
              id="w-node-_2bca43ef-7cde-b5da-b1b2-716107bf8e4a-07bf8e43"
              class="w-layout-grid inner-footer-nav"
            >
              <div
                id="w-node-_2bca43ef-7cde-b5da-b1b2-716107bf8e4b-07bf8e43"
                class="grid-wrapper"
              >
                <ul role="list" class="w-list-unstyled snip-ul">
                  <li class="snip-li">
                    <h4 class="heading-small text-white snip-h4">
                      <font>
                        <font>Business</font>
                      </font>
                    </h4>
                  </li>
                  <li class="snip-li">
                    <a
                      href="/page-de-destination/page-de-destination-01"
                      class="link-wrapper text-white link-footer snip-a"
                    >
                      <font>
                        <font>landing page</font>
                      </font>
                    </a>
                  </li>
                  <li class="snip-li">
                    <a
                      href="/pages-de-lentreprise/caracteristiques-01"
                      class="link-wrapper text-white link-footer snip-a"
                    >
                      <font>
                        <font>Characteristics</font>
                      </font>
                    </a>
                  </li>
                  <li class="snip-li">
                    <a
                      href="/pages-de-lentreprise/a-propos-01"
                      class="link-wrapper text-white link-footer snip-a"
                    >
                      <font>
                        <font>About</font>
                      </font>
                    </a>
                  </li>
                  <li class="snip-li">
                    <a
                      href="/pages-de-lentreprise/prix-01"
                      class="link-wrapper text-white link-footer snip-a"
                    >
                      <font>
                        <font>Price</font>
                      </font>
                    </a>
                  </li>
                </ul>
              </div>
              <div
                id="w-node-_2bca43ef-7cde-b5da-b1b2-716107bf8e5c-07bf8e43"
                class="grid-wrapper"
              >
                <ul role="list" class="w-list-unstyled snip-ul">
                  <li class="snip-li">
                    <h4 class="heading-small text-white snip-h4">
                      <font>
                        <font>CMS</font>
                      </font>
                    </h4>
                  </li>
                  <li class="snip-li">
                    <a
                      href="/cms/merch-01"
                      class="link-wrapper text-white link-footer snip-a"
                    >
                      <font>
                        <font>merch</font>
                      </font>
                    </a>
                  </li>
                  <li class="snip-li">
                    <a
                      href="/cms/blog-01"
                      class="link-wrapper text-white link-footer snip-a"
                    >
                      <font>
                        <font>Blog</font>
                      </font>
                    </a>
                  </li>
                  <li class="snip-li">
                    <a
                      href="/pages-de-lentreprise/membres-de-lequipe"
                      class="link-wrapper text-white link-footer snip-a"
                    >
                      <font>
                        <font>Members of the team</font>
                      </font>
                    </a>
                  </li>
                  <li class="snip-li">
                    <a
                      href="/pages-de-lentreprise/contact-01"
                      class="link-wrapper text-white link-footer snip-a"
                    >
                      <font>
                        <font>Contact</font>
                      </font>
                    </a>
                  </li>
                </ul>
              </div>
              <div
                id="w-node-_2bca43ef-7cde-b5da-b1b2-716107bf8e6d-07bf8e43"
                class="grid-wrapper"
              >
                <ul role="list" class="w-list-unstyled snip-ul">
                  <li class="snip-li">
                    <h4 class="heading-small text-white snip-h4">
                      <font>
                        <font>Model</font>
                      </font>
                    </h4>
                  </li>
                  <li class="snip-li">
                    <a
                      href="/pages-de-lentreprise/pages-juridiques"
                      class="link-wrapper text-white link-footer snip-a"
                    >
                      <font>
                        <font>Legal Pages</font>
                      </font>
                    </a>
                  </li>
                  <li class="snip-li">
                    <a
                      href="/utility/licences"
                      class="link-wrapper text-white link-footer snip-a"
                    >
                      <font>
                        <font>Licenses</font>
                      </font>
                    </a>
                  </li>
                  <li class="snip-li">
                    <a
                      href="/utility/guide-de-style"
                      class="link-wrapper text-white link-footer snip-a"
                    >
                      <font>
                        <font>Style Guide</font>
                      </font>
                    </a>
                  </li>
                  <li class="snip-li">
                    <a
                      href="/utility/journal-des-modifications"
                      class="link-wrapper text-white link-footer snip-a"
                    >
                      <font>
                        <font>Change log</font>
                      </font>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
const styles = {
  text: {
    fontFamily: "Inter",
    fontWeight: "bold",
    fontSize: "2em",
    maxWidth: "16ch",
  },
  outerwrapper: {
    marginTop: 60,
  },
  buttonWrapper: {
    display: "grid",
    gridAutoColumns: "1fr",
    gridRowGap: "16px",
    gridColumnGap: "16px",
    gridAutoFlow: "column",
    gridTemplateColumns: "auto auto",
    gridTemplateRows: "auto",
    padding: "0px 40vw",
  },
  buttonText: {
    fontFamily: "Inter",
    fontSize: 15,
  },
  buttonContainer: {
    backgroundColor: "#ff0062",
    padding: "0px 40px",
    borderRadius: "5px",
  },
  imageGrid: {
    display: "grid",
  },
  subscribebutton: {
    backgroundColor: "#ff0062",
    height: "55px",
  },
};
export default withStyles(styled)(HomeScreen);
