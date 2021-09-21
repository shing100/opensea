import React from "react";

import { NftGallery } from 'react-nft-gallery';

class body extends React.Component {
  render() {
    return (
      <div>
        <section className="center padding">
          <div className="margin-bottom max-width-m">
            <h3>CarrotCarrot</h3>
            <p className="lead">
              CarrotCarrot의 디지털 자산 목록입니다!
            </p>
          </div>
          <div className="max-width-l">
          <NftGallery ownerAddress="0xCd5F426f843B2c9d20f0A3B041980E27635c6E96" />
          </div>
        </section>
        <footer className="footer-main bg-light">
          <div className="padding">
            <div className="row max-width-l">
              <div className="col-one-fifth">
                <h6>Other Links</h6>


              </div>
              <div className="col-one-fifth">
                <h6>Connect</h6>
                <ul className="blank">
                  <li>
                    <a href="https://github.com/shing100">Github</a>
                  </li>
                  <li>
                    <a href="https://kingname.tistory.com/">Tistory</a>
                  </li>
                </ul>
              </div>
              <div className="col-two-fifths">
                <a href="https://opensea.io/">Opensea 에서 확인 가능합니다!</a>
              </div>
            </div>
          </div>
          <p className="copyright">
            <span> © 2021, all rights reserved.</span>
          </p>
        </footer>
      </div>
    );
  }
}

export default body;
