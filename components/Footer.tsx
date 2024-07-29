import {BroccoliSvg, CarrotSvg, LemonSvg, PepperSvg, PumpkinSvg, TomatoSvg} from "./svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__about">
        <h2>About Us</h2>
        <h4 className="mt-10 mb-12">Our mission at CookBook is to make everyday cooking fun, because we believe that cooking is key to a happier and healthier life for people, communities and the planet. We empower homecooks all over the world to help each other by sharing recipes and cooking tips.</h4>
        <div className="flex gap-12 flex-wrap justify-center md:justify-normal">
          <svg width="272" height="101" viewBox="0 0 272 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1345_460)">
            <rect x="4" width="264" height="93" rx="19" fill="black"/>
            <path d="M63.16 72.7532C60.1231 75.7084 56.8074 75.2418 53.6156 73.842C50.2379 72.411 47.1391 72.3488 43.5755 73.842C39.1132 75.7706 36.7581 75.2107 34.0931 72.7532C18.9709 57.1063 21.202 33.2782 38.3695 32.4072C42.5529 32.6249 45.4657 34.7091 47.9138 34.8958C51.5704 34.1492 55.0721 32.0028 58.9766 32.2828C63.6558 32.6561 67.1885 34.5225 69.5126 37.8821C59.8443 43.6991 62.1374 56.4842 71 60.0615C69.2337 64.7276 66.9406 69.3625 63.129 72.7843L63.16 72.7532ZM47.6039 32.2206C47.1391 25.2837 52.748 19.5599 59.1935 19C60.0922 27.0257 51.9423 32.9982 47.6039 32.2206Z" fill="white"/>
            <path d="M97.9841 30V28.538H101.265C102.138 28.538 102.903 28.351 103.56 27.977C104.217 27.5917 104.727 27.0647 105.09 26.396C105.464 25.7273 105.651 24.9567 105.651 24.084C105.651 23.2227 105.464 22.4577 105.09 21.789C104.716 21.1203 104.2 20.599 103.543 20.225C102.886 19.851 102.126 19.664 101.265 19.664H98.0011V18.202H101.299C102.16 18.202 102.954 18.3493 103.679 18.644C104.416 18.9387 105.05 19.3523 105.583 19.885C106.127 20.4177 106.546 21.041 106.841 21.755C107.147 22.469 107.3 23.251 107.3 24.101C107.3 24.9397 107.147 25.7217 106.841 26.447C106.546 27.161 106.133 27.7843 105.6 28.317C105.067 28.8497 104.433 29.2633 103.696 29.558C102.971 29.8527 102.183 30 101.333 30H97.9841ZM96.9301 30V18.202H98.5281V30H96.9301ZM112.931 30.17C112.138 30.17 111.424 29.983 110.789 29.609C110.154 29.235 109.65 28.7307 109.276 28.096C108.902 27.45 108.715 26.7303 108.715 25.937C108.715 25.155 108.902 24.4523 109.276 23.829C109.65 23.1943 110.154 22.69 110.789 22.316C111.424 21.942 112.138 21.755 112.931 21.755C113.713 21.755 114.421 21.942 115.056 22.316C115.702 22.6787 116.212 23.1773 116.586 23.812C116.96 24.4467 117.147 25.155 117.147 25.937C117.147 26.7303 116.96 27.45 116.586 28.096C116.212 28.7307 115.702 29.235 115.056 29.609C114.421 29.983 113.713 30.17 112.931 30.17ZM112.931 28.691C113.441 28.691 113.894 28.572 114.291 28.334C114.688 28.096 114.999 27.773 115.226 27.365C115.453 26.9457 115.566 26.4697 115.566 25.937C115.566 25.4157 115.447 24.951 115.209 24.543C114.982 24.135 114.671 23.8177 114.274 23.591C113.889 23.353 113.441 23.234 112.931 23.234C112.421 23.234 111.968 23.353 111.571 23.591C111.174 23.8177 110.863 24.135 110.636 24.543C110.409 24.951 110.296 25.4157 110.296 25.937C110.296 26.4697 110.409 26.9457 110.636 27.365C110.863 27.773 111.174 28.096 111.571 28.334C111.968 28.572 112.421 28.691 112.931 28.691ZM120.951 30L117.755 21.925H119.353L121.665 28.215H121.155L123.45 21.925H124.334L126.629 28.215H126.119L128.431 21.925H130.029L126.85 30H125.949L123.62 23.897H124.181L121.835 30H120.951ZM137.101 30V25.291C137.101 24.679 136.908 24.1747 136.523 23.778C136.137 23.3813 135.639 23.183 135.027 23.183C134.619 23.183 134.256 23.2737 133.939 23.455C133.621 23.6363 133.372 23.8857 133.191 24.203C133.009 24.5203 132.919 24.883 132.919 25.291L132.29 24.934C132.29 24.322 132.426 23.778 132.698 23.302C132.97 22.826 133.349 22.452 133.837 22.18C134.324 21.8967 134.874 21.755 135.486 21.755C136.098 21.755 136.636 21.908 137.101 22.214C137.577 22.52 137.951 22.9223 138.223 23.421C138.495 23.9083 138.631 24.4297 138.631 24.985V30H137.101ZM131.389 30V21.925H132.919V30H131.389ZM140.702 30V17.862H142.232V30H140.702ZM148.16 30.17C147.366 30.17 146.652 29.983 146.018 29.609C145.383 29.235 144.879 28.7307 144.505 28.096C144.131 27.45 143.944 26.7303 143.944 25.937C143.944 25.155 144.131 24.4523 144.505 23.829C144.879 23.1943 145.383 22.69 146.018 22.316C146.652 21.942 147.366 21.755 148.16 21.755C148.942 21.755 149.65 21.942 150.285 22.316C150.931 22.6787 151.441 23.1773 151.815 23.812C152.189 24.4467 152.376 25.155 152.376 25.937C152.376 26.7303 152.189 27.45 151.815 28.096C151.441 28.7307 150.931 29.235 150.285 29.609C149.65 29.983 148.942 30.17 148.16 30.17ZM148.16 28.691C148.67 28.691 149.123 28.572 149.52 28.334C149.916 28.096 150.228 27.773 150.455 27.365C150.681 26.9457 150.795 26.4697 150.795 25.937C150.795 25.4157 150.676 24.951 150.438 24.543C150.211 24.135 149.899 23.8177 149.503 23.591C149.117 23.353 148.67 23.234 148.16 23.234C147.65 23.234 147.196 23.353 146.8 23.591C146.403 23.8177 146.091 24.135 145.865 24.543C145.638 24.951 145.525 25.4157 145.525 25.937C145.525 26.4697 145.638 26.9457 145.865 27.365C146.091 27.773 146.403 28.096 146.8 28.334C147.196 28.572 147.65 28.691 148.16 28.691ZM157.534 30.17C156.797 30.17 156.128 29.9887 155.528 29.626C154.927 29.252 154.451 28.7477 154.1 28.113C153.76 27.4783 153.59 26.7643 153.59 25.971C153.59 25.1777 153.76 24.4637 154.1 23.829C154.451 23.1943 154.921 22.69 155.511 22.316C156.111 21.942 156.786 21.755 157.534 21.755C158.146 21.755 158.69 21.8853 159.166 22.146C159.653 22.3953 160.044 22.7467 160.339 23.2C160.633 23.642 160.798 24.1577 160.832 24.747V27.178C160.798 27.756 160.633 28.2717 160.339 28.725C160.055 29.1783 159.67 29.5353 159.183 29.796C158.707 30.0453 158.157 30.17 157.534 30.17ZM157.789 28.725C158.548 28.725 159.16 28.47 159.625 27.96C160.089 27.4387 160.322 26.7757 160.322 25.971C160.322 25.4157 160.214 24.934 159.999 24.526C159.795 24.1067 159.5 23.7837 159.115 23.557C158.729 23.319 158.282 23.2 157.772 23.2C157.262 23.2 156.808 23.319 156.412 23.557C156.026 23.795 155.72 24.1237 155.494 24.543C155.278 24.951 155.171 25.4213 155.171 25.954C155.171 26.498 155.278 26.9797 155.494 27.399C155.72 27.807 156.032 28.13 156.429 28.368C156.825 28.606 157.279 28.725 157.789 28.725ZM160.22 30V27.824L160.509 25.852L160.22 23.897V21.925H161.767V30H160.22ZM167.411 30.17C166.663 30.17 165.994 29.9887 165.405 29.626C164.816 29.252 164.345 28.7477 163.994 28.113C163.654 27.4783 163.484 26.7643 163.484 25.971C163.484 25.1777 163.654 24.4637 163.994 23.829C164.345 23.1943 164.816 22.69 165.405 22.316C165.994 21.942 166.663 21.755 167.411 21.755C168.012 21.755 168.556 21.8853 169.043 22.146C169.53 22.3953 169.921 22.7467 170.216 23.2C170.522 23.642 170.692 24.1577 170.726 24.747V27.178C170.692 27.756 170.528 28.2717 170.233 28.725C169.938 29.1783 169.547 29.5353 169.06 29.796C168.573 30.0453 168.023 30.17 167.411 30.17ZM167.666 28.725C168.176 28.725 168.618 28.606 168.992 28.368C169.377 28.13 169.678 27.807 169.893 27.399C170.108 26.9797 170.216 26.5037 170.216 25.971C170.216 25.4157 170.103 24.934 169.876 24.526C169.661 24.118 169.36 23.795 168.975 23.557C168.601 23.319 168.159 23.2 167.649 23.2C167.139 23.2 166.691 23.319 166.306 23.557C165.921 23.795 165.615 24.1237 165.388 24.543C165.173 24.951 165.065 25.4213 165.065 25.954C165.065 26.498 165.173 26.9797 165.388 27.399C165.615 27.807 165.921 28.13 166.306 28.368C166.703 28.606 167.156 28.725 167.666 28.725ZM171.661 30H170.114V27.824L170.403 25.852L170.114 23.897V17.862H171.661V30ZM181.114 30.17C180.32 30.17 179.606 29.983 178.972 29.609C178.337 29.235 177.833 28.7307 177.459 28.096C177.085 27.45 176.898 26.7303 176.898 25.937C176.898 25.155 177.085 24.4523 177.459 23.829C177.833 23.1943 178.337 22.69 178.972 22.316C179.606 21.942 180.32 21.755 181.114 21.755C181.896 21.755 182.604 21.942 183.239 22.316C183.885 22.6787 184.395 23.1773 184.769 23.812C185.143 24.4467 185.33 25.155 185.33 25.937C185.33 26.7303 185.143 27.45 184.769 28.096C184.395 28.7307 183.885 29.235 183.239 29.609C182.604 29.983 181.896 30.17 181.114 30.17ZM181.114 28.691C181.624 28.691 182.077 28.572 182.474 28.334C182.87 28.096 183.182 27.773 183.409 27.365C183.635 26.9457 183.749 26.4697 183.749 25.937C183.749 25.4157 183.63 24.951 183.392 24.543C183.165 24.135 182.853 23.8177 182.457 23.591C182.071 23.353 181.624 23.234 181.114 23.234C180.604 23.234 180.15 23.353 179.754 23.591C179.357 23.8177 179.045 24.135 178.819 24.543C178.592 24.951 178.479 25.4157 178.479 25.937C178.479 26.4697 178.592 26.9457 178.819 27.365C179.045 27.773 179.357 28.096 179.754 28.334C180.15 28.572 180.604 28.691 181.114 28.691ZM192.766 30V25.291C192.766 24.679 192.573 24.1747 192.188 23.778C191.802 23.3813 191.304 23.183 190.692 23.183C190.284 23.183 189.921 23.2737 189.604 23.455C189.286 23.6363 189.037 23.8857 188.856 24.203C188.674 24.5203 188.584 24.883 188.584 25.291L187.955 24.934C187.955 24.322 188.091 23.778 188.363 23.302C188.635 22.826 189.014 22.452 189.502 22.18C189.989 21.8967 190.539 21.755 191.151 21.755C191.763 21.755 192.301 21.908 192.766 22.214C193.242 22.52 193.616 22.9223 193.888 23.421C194.16 23.9083 194.296 24.4297 194.296 24.985V30H192.766ZM187.054 30V21.925H188.584V30H187.054ZM201.144 30V18.542H202.674V30H201.144ZM199.155 23.319V21.925H204.663V23.319H199.155ZM211.874 30V25.291C211.874 24.679 211.681 24.1747 211.296 23.778C210.911 23.3813 210.412 23.183 209.8 23.183C209.392 23.183 209.029 23.2737 208.712 23.455C208.395 23.6363 208.145 23.8857 207.964 24.203C207.783 24.5203 207.692 24.883 207.692 25.291L207.063 24.934C207.063 24.322 207.199 23.778 207.471 23.302C207.743 22.826 208.123 22.452 208.61 22.18C209.097 21.8967 209.647 21.755 210.259 21.755C210.871 21.755 211.409 21.891 211.874 22.163C212.35 22.435 212.724 22.8147 212.996 23.302C213.268 23.7893 213.404 24.3503 213.404 24.985V30H211.874ZM206.162 30V17.862H207.692V30H206.162ZM219.216 30.17C218.411 30.17 217.686 29.9887 217.04 29.626C216.394 29.252 215.884 28.7477 215.51 28.113C215.136 27.4783 214.949 26.7587 214.949 25.954C214.949 25.1607 215.13 24.4467 215.493 23.812C215.867 23.1773 216.365 22.6787 216.989 22.316C217.623 21.942 218.332 21.755 219.114 21.755C219.862 21.755 220.519 21.925 221.086 22.265C221.664 22.605 222.111 23.0753 222.429 23.676C222.757 24.2767 222.922 24.9567 222.922 25.716C222.922 25.8293 222.916 25.954 222.905 26.09C222.893 26.2147 222.871 26.362 222.837 26.532H216.02V25.257H222.021L221.46 25.75C221.46 25.206 221.363 24.747 221.171 24.373C220.978 23.9877 220.706 23.693 220.355 23.489C220.003 23.2737 219.578 23.166 219.08 23.166C218.558 23.166 218.099 23.2793 217.703 23.506C217.306 23.7327 217 24.05 216.785 24.458C216.569 24.866 216.462 25.3477 216.462 25.903C216.462 26.4697 216.575 26.9683 216.802 27.399C217.028 27.8183 217.351 28.147 217.771 28.385C218.19 28.6117 218.672 28.725 219.216 28.725C219.669 28.725 220.083 28.6457 220.457 28.487C220.842 28.3283 221.171 28.0903 221.443 27.773L222.429 28.776C222.043 29.2293 221.567 29.575 221.001 29.813C220.445 30.051 219.85 30.17 219.216 30.17ZM92.768 70L101.984 47.6H104.544L113.696 70H109.728L102.56 51.856H103.904L96.672 70H92.768ZM97.312 65.68V62.48H109.184V65.68H97.312ZM124.645 70.32C123.471 70.32 122.426 70.0747 121.509 69.584C120.591 69.072 119.866 68.3787 119.333 67.504C118.821 66.6293 118.565 65.6373 118.565 64.528V60.112C118.565 59.0027 118.831 58.0107 119.365 57.136C119.898 56.2613 120.623 55.5787 121.541 55.088C122.458 54.576 123.493 54.32 124.645 54.32C126.031 54.32 127.279 54.6827 128.389 55.408C129.519 56.112 130.405 57.072 131.045 58.288C131.706 59.4827 132.037 60.8373 132.037 62.352C132.037 63.8453 131.706 65.2 131.045 66.416C130.405 67.6107 129.519 68.56 128.389 69.264C127.279 69.968 126.031 70.32 124.645 70.32ZM124.069 66.992C124.922 66.992 125.669 66.8 126.309 66.416C126.97 66.0107 127.482 65.456 127.845 64.752C128.229 64.048 128.421 63.2373 128.421 62.32C128.421 61.4027 128.229 60.592 127.845 59.888C127.482 59.184 126.97 58.64 126.309 58.256C125.669 57.8507 124.922 57.648 124.069 57.648C123.215 57.648 122.458 57.8507 121.797 58.256C121.135 58.64 120.623 59.184 120.261 59.888C119.898 60.592 119.717 61.4027 119.717 62.32C119.717 63.2373 119.898 64.048 120.261 64.752C120.623 65.456 121.135 66.0107 121.797 66.416C122.458 66.8 123.215 66.992 124.069 66.992ZM116.421 76.4V54.64H119.941V58.768L119.333 62.512L119.941 66.224V76.4H116.421ZM143.207 70.32C142.034 70.32 140.989 70.0747 140.071 69.584C139.154 69.072 138.429 68.3787 137.895 67.504C137.383 66.6293 137.127 65.6373 137.127 64.528V60.112C137.127 59.0027 137.394 58.0107 137.927 57.136C138.461 56.2613 139.186 55.5787 140.103 55.088C141.021 54.576 142.055 54.32 143.207 54.32C144.594 54.32 145.842 54.6827 146.951 55.408C148.082 56.112 148.967 57.072 149.607 58.288C150.269 59.4827 150.599 60.8373 150.599 62.352C150.599 63.8453 150.269 65.2 149.607 66.416C148.967 67.6107 148.082 68.56 146.951 69.264C145.842 69.968 144.594 70.32 143.207 70.32ZM142.631 66.992C143.485 66.992 144.231 66.8 144.871 66.416C145.533 66.0107 146.045 65.456 146.407 64.752C146.791 64.048 146.983 63.2373 146.983 62.32C146.983 61.4027 146.791 60.592 146.407 59.888C146.045 59.184 145.533 58.64 144.871 58.256C144.231 57.8507 143.485 57.648 142.631 57.648C141.778 57.648 141.021 57.8507 140.359 58.256C139.698 58.64 139.186 59.184 138.823 59.888C138.461 60.592 138.279 61.4027 138.279 62.32C138.279 63.2373 138.461 64.048 138.823 64.752C139.186 65.456 139.698 66.0107 140.359 66.416C141.021 66.8 141.778 66.992 142.631 66.992ZM134.983 76.4V54.64H138.503V58.768L137.895 62.512L138.503 66.224V76.4H134.983ZM166.672 70.32C164.901 70.32 163.397 70 162.16 69.36C160.923 68.72 159.813 67.7813 158.832 66.544L161.328 64.048C161.947 64.944 162.683 65.648 163.536 66.16C164.389 66.6507 165.477 66.896 166.8 66.896C168.037 66.896 169.019 66.64 169.744 66.128C170.491 65.616 170.864 64.912 170.864 64.016C170.864 63.2693 170.672 62.6613 170.288 62.192C169.904 61.7227 169.392 61.3387 168.752 61.04C168.133 60.72 167.44 60.4427 166.672 60.208C165.925 59.952 165.168 59.6747 164.4 59.376C163.653 59.056 162.96 58.6613 162.32 58.192C161.701 57.7227 161.2 57.1147 160.816 56.368C160.432 55.6213 160.24 54.672 160.24 53.52C160.24 52.1973 160.56 51.0773 161.2 50.16C161.861 49.2213 162.747 48.5067 163.856 48.016C164.965 47.5253 166.203 47.28 167.568 47.28C169.04 47.28 170.352 47.568 171.504 48.144C172.677 48.72 173.627 49.456 174.352 50.352L171.856 52.848C171.216 52.1227 170.544 51.5893 169.84 51.248C169.157 50.8853 168.368 50.704 167.472 50.704C166.363 50.704 165.488 50.928 164.848 51.376C164.229 51.824 163.92 52.4533 163.92 53.264C163.92 53.9467 164.112 54.5013 164.496 54.928C164.88 55.3333 165.381 55.6853 166 55.984C166.64 56.2613 167.333 56.528 168.08 56.784C168.848 57.04 169.605 57.328 170.352 57.648C171.12 57.968 171.813 58.384 172.432 58.896C173.072 59.3867 173.584 60.0267 173.968 60.816C174.352 61.6053 174.544 62.5973 174.544 63.792C174.544 65.7973 173.829 67.3867 172.4 68.56C170.992 69.7333 169.083 70.32 166.672 70.32ZM180.069 70V48.24H183.589V70H180.069ZM176.389 57.84V54.64H187.269V57.84H176.389ZM196.43 70.32C194.936 70.32 193.582 69.968 192.366 69.264C191.15 68.5387 190.179 67.568 189.454 66.352C188.75 65.136 188.398 63.7813 188.398 62.288C188.398 60.7947 188.75 59.4507 189.454 58.256C190.179 57.0613 191.15 56.112 192.366 55.408C193.582 54.6827 194.936 54.32 196.43 54.32C197.944 54.32 199.31 54.672 200.526 55.376C201.742 56.08 202.702 57.04 203.406 58.256C204.131 59.4507 204.494 60.7947 204.494 62.288C204.494 63.7813 204.131 65.136 203.406 66.352C202.702 67.568 201.742 68.5387 200.526 69.264C199.31 69.968 197.944 70.32 196.43 70.32ZM196.43 66.928C197.304 66.928 198.072 66.736 198.734 66.352C199.416 65.9467 199.939 65.392 200.302 64.688C200.686 63.984 200.878 63.184 200.878 62.288C200.878 61.392 200.686 60.6027 200.302 59.92C199.918 59.2373 199.395 58.704 198.734 58.32C198.072 57.9147 197.304 57.712 196.43 57.712C195.576 57.712 194.808 57.9147 194.126 58.32C193.464 58.704 192.942 59.2373 192.558 59.92C192.195 60.6027 192.014 61.392 192.014 62.288C192.014 63.184 192.195 63.984 192.558 64.688C192.942 65.392 193.464 65.9467 194.126 66.352C194.808 66.736 195.576 66.928 196.43 66.928ZM207.421 70V54.64H210.941V70H207.421ZM210.941 61.456L209.725 60.848C209.725 58.9067 210.151 57.3387 211.005 56.144C211.879 54.928 213.191 54.32 214.941 54.32C215.709 54.32 216.402 54.4587 217.021 54.736C217.639 55.0133 218.215 55.4613 218.749 56.08L216.445 58.448C216.167 58.1493 215.858 57.936 215.517 57.808C215.175 57.68 214.781 57.616 214.333 57.616C213.351 57.616 212.541 57.9253 211.901 58.544C211.261 59.1627 210.941 60.1333 210.941 61.456ZM227.119 70.32C225.583 70.32 224.197 69.9787 222.959 69.296C221.743 68.592 220.773 67.632 220.047 66.416C219.343 65.2 218.991 63.8347 218.991 62.32C218.991 60.8053 219.343 59.4507 220.047 58.256C220.751 57.04 221.701 56.08 222.895 55.376C224.111 54.672 225.455 54.32 226.927 54.32C228.357 54.32 229.615 54.6507 230.703 55.312C231.813 55.9733 232.677 56.88 233.295 58.032C233.935 59.184 234.255 60.496 234.255 61.968C234.255 62.224 234.234 62.4907 234.191 62.768C234.17 63.024 234.127 63.312 234.063 63.632H221.455V60.752H232.239L230.927 61.904C230.885 60.9653 230.703 60.176 230.383 59.536C230.063 58.896 229.605 58.4053 229.007 58.064C228.431 57.7227 227.717 57.552 226.863 57.552C225.967 57.552 225.189 57.744 224.527 58.128C223.866 58.512 223.354 59.056 222.991 59.76C222.629 60.4427 222.447 61.264 222.447 62.224C222.447 63.184 222.639 64.0267 223.023 64.752C223.407 65.4773 223.951 66.0427 224.655 66.448C225.359 66.832 226.17 67.024 227.087 67.024C227.877 67.024 228.602 66.8853 229.263 66.608C229.946 66.3307 230.522 65.9253 230.991 65.392L233.231 67.664C232.485 68.5387 231.578 69.2 230.511 69.648C229.445 70.096 228.314 70.32 227.119 70.32Z" fill="white"/>
            </g>
            <defs>
            <filter id="filter0_d_1345_460" x="0" y="0" width="272" height="101" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1345_460"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1345_460" result="shape"/>
            </filter>
            </defs>
          </svg>
          <svg width="272" height="101" viewBox="0 0 272 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1345_454)">
            <rect x="4" width="264" height="93" rx="19" fill="black"/>
            <path d="M83.732 30.17C82.9047 30.17 82.1283 30.017 81.403 29.711C80.689 29.3937 80.06 28.9573 79.516 28.402C78.9833 27.8467 78.564 27.2007 78.258 26.464C77.952 25.7273 77.799 24.934 77.799 24.084C77.799 23.234 77.952 22.4463 78.258 21.721C78.564 20.9843 78.989 20.3383 79.533 19.783C80.077 19.2277 80.7117 18.797 81.437 18.491C82.1737 18.185 82.9727 18.032 83.834 18.032C84.7747 18.032 85.6417 18.2133 86.435 18.576C87.2283 18.9387 87.8913 19.46 88.424 20.14L87.319 21.245C86.945 20.701 86.452 20.2873 85.84 20.004C85.228 19.7093 84.5593 19.562 83.834 19.562C82.9727 19.562 82.2077 19.7547 81.539 20.14C80.8817 20.5253 80.366 21.058 79.992 21.738C79.6293 22.418 79.448 23.2 79.448 24.084C79.448 24.9793 79.635 25.767 80.009 26.447C80.383 27.127 80.8873 27.6597 81.522 28.045C82.1567 28.4303 82.882 28.623 83.698 28.623C84.5253 28.623 85.2393 28.4643 85.84 28.147C86.452 27.8297 86.9223 27.365 87.251 26.753C87.5797 26.1297 87.744 25.3703 87.744 24.475L88.713 25.172H83.613V23.71H89.393V23.948C89.393 25.3193 89.1493 26.4697 88.662 27.399C88.186 28.317 87.5173 29.0083 86.656 29.473C85.806 29.9377 84.8313 30.17 83.732 30.17ZM91.5424 30V18.202H93.1404V30H91.5424ZM92.6304 30V28.538H99.3964V30H92.6304ZM92.6304 24.662V23.268H98.8354V24.662H92.6304ZM92.6304 19.664V18.202H99.3114V19.664H92.6304ZM104.25 30V18.542H105.848V30H104.25ZM100.238 19.664V18.202H109.843V19.664H100.238ZM115.017 30V18.202H116.615V30H115.017ZM122.528 30V18.542H124.126V30H122.528ZM118.516 19.664V18.202H128.121V19.664H118.516ZM138.667 30.17C137.829 30.17 137.047 30.017 136.321 29.711C135.596 29.3937 134.961 28.9573 134.417 28.402C133.873 27.8353 133.448 27.1837 133.142 26.447C132.848 25.7103 132.7 24.9227 132.7 24.084C132.7 23.234 132.848 22.4463 133.142 21.721C133.448 20.9843 133.868 20.3383 134.4 19.783C134.944 19.2277 135.573 18.797 136.287 18.491C137.013 18.185 137.795 18.032 138.633 18.032C139.472 18.032 140.248 18.185 140.962 18.491C141.688 18.797 142.322 19.2277 142.866 19.783C143.41 20.3383 143.835 20.9843 144.141 21.721C144.447 22.4577 144.6 23.251 144.6 24.101C144.6 24.9397 144.447 25.7273 144.141 26.464C143.835 27.2007 143.41 27.8467 142.866 28.402C142.334 28.9573 141.705 29.3937 140.979 29.711C140.265 30.017 139.495 30.17 138.667 30.17ZM138.633 28.64C139.483 28.64 140.226 28.4473 140.86 28.062C141.506 27.6653 142.016 27.127 142.39 26.447C142.764 25.7557 142.951 24.968 142.951 24.084C142.951 23.4267 142.844 22.826 142.628 22.282C142.413 21.7267 142.113 21.245 141.727 20.837C141.342 20.429 140.889 20.1173 140.367 19.902C139.846 19.6753 139.268 19.562 138.633 19.562C137.795 19.562 137.052 19.7547 136.406 20.14C135.772 20.5253 135.267 21.058 134.893 21.738C134.531 22.418 134.349 23.2 134.349 24.084C134.349 24.7413 134.451 25.3533 134.655 25.92C134.871 26.4753 135.165 26.957 135.539 27.365C135.925 27.7617 136.378 28.0733 136.899 28.3C137.432 28.5267 138.01 28.64 138.633 28.64ZM146.792 30V18.202H147.914L148.39 20.055V30H146.792ZM154.952 30L147.71 20.327L147.914 18.202L155.173 27.858L154.952 30ZM154.952 30L154.476 28.249V18.202H156.074V30H154.952ZM89.544 70.32C88.008 70.32 86.5573 70.0213 85.192 69.424C83.8267 68.8267 82.632 68.0053 81.608 66.96C80.584 65.8933 79.7733 64.6667 79.176 63.28C78.6 61.872 78.312 60.368 78.312 58.768C78.312 57.168 78.6 55.6747 79.176 54.288C79.7733 52.9013 80.584 51.6853 81.608 50.64C82.6533 49.5733 83.8693 48.752 85.256 48.176C86.664 47.5787 88.1787 47.28 89.8 47.28C91.5707 47.28 93.2133 47.6213 94.728 48.304C96.2427 48.9867 97.512 49.9573 98.536 51.216L96.04 53.712C95.3787 52.7733 94.4933 52.0587 93.384 51.568C92.2747 51.056 91.08 50.8 89.8 50.8C88.264 50.8 86.9093 51.1413 85.736 51.824C84.584 52.4853 83.688 53.4133 83.048 54.608C82.408 55.8027 82.088 57.1893 82.088 58.768C82.088 60.3467 82.408 61.744 83.048 62.96C83.7093 64.1547 84.5947 65.0933 85.704 65.776C86.8133 66.4587 88.072 66.8 89.48 66.8C90.9733 66.8 92.2533 66.5333 93.32 66C94.408 65.4453 95.24 64.6347 95.816 63.568C96.392 62.48 96.68 61.1467 96.68 59.568L98.984 61.232H89.416V57.872H100.488V58.384C100.488 61.0507 100.008 63.2693 99.048 65.04C98.1093 66.8107 96.8187 68.1333 95.176 69.008C93.5333 69.8827 91.656 70.32 89.544 70.32ZM110.711 70.32C109.217 70.32 107.863 69.968 106.647 69.264C105.431 68.5387 104.46 67.568 103.735 66.352C103.031 65.136 102.679 63.7813 102.679 62.288C102.679 60.7947 103.031 59.4507 103.735 58.256C104.46 57.0613 105.431 56.112 106.647 55.408C107.863 54.6827 109.217 54.32 110.711 54.32C112.225 54.32 113.591 54.672 114.807 55.376C116.023 56.08 116.983 57.04 117.687 58.256C118.412 59.4507 118.775 60.7947 118.775 62.288C118.775 63.7813 118.412 65.136 117.687 66.352C116.983 67.568 116.023 68.5387 114.807 69.264C113.591 69.968 112.225 70.32 110.711 70.32ZM110.711 66.928C111.585 66.928 112.353 66.736 113.015 66.352C113.697 65.9467 114.22 65.392 114.583 64.688C114.967 63.984 115.159 63.184 115.159 62.288C115.159 61.392 114.967 60.6027 114.583 59.92C114.199 59.2373 113.676 58.704 113.015 58.32C112.353 57.9147 111.585 57.712 110.711 57.712C109.857 57.712 109.089 57.9147 108.407 58.32C107.745 58.704 107.223 59.2373 106.839 59.92C106.476 60.6027 106.295 61.392 106.295 62.288C106.295 63.184 106.476 63.984 106.839 64.688C107.223 65.392 107.745 65.9467 108.407 66.352C109.089 66.736 109.857 66.928 110.711 66.928ZM128.742 70.32C127.249 70.32 125.894 69.968 124.678 69.264C123.462 68.5387 122.491 67.568 121.766 66.352C121.062 65.136 120.71 63.7813 120.71 62.288C120.71 60.7947 121.062 59.4507 121.766 58.256C122.491 57.0613 123.462 56.112 124.678 55.408C125.894 54.6827 127.249 54.32 128.742 54.32C130.257 54.32 131.622 54.672 132.838 55.376C134.054 56.08 135.014 57.04 135.718 58.256C136.443 59.4507 136.806 60.7947 136.806 62.288C136.806 63.7813 136.443 65.136 135.718 66.352C135.014 67.568 134.054 68.5387 132.838 69.264C131.622 69.968 130.257 70.32 128.742 70.32ZM128.742 66.928C129.617 66.928 130.385 66.736 131.046 66.352C131.729 65.9467 132.251 65.392 132.614 64.688C132.998 63.984 133.19 63.184 133.19 62.288C133.19 61.392 132.998 60.6027 132.614 59.92C132.23 59.2373 131.707 58.704 131.046 58.32C130.385 57.9147 129.617 57.712 128.742 57.712C127.889 57.712 127.121 57.9147 126.438 58.32C125.777 58.704 125.254 59.2373 124.87 59.92C124.507 60.6027 124.326 61.392 124.326 62.288C124.326 63.184 124.507 63.984 124.87 64.688C125.254 65.392 125.777 65.9467 126.438 66.352C127.121 66.736 127.889 66.928 128.742 66.928ZM146.133 76.72C144.512 76.72 143.093 76.4213 141.877 75.824C140.661 75.248 139.68 74.4267 138.933 73.36L141.237 71.056C141.856 71.824 142.56 72.4 143.349 72.784C144.139 73.168 145.088 73.36 146.197 73.36C147.584 73.36 148.683 72.9973 149.493 72.272C150.304 71.568 150.709 70.5973 150.709 69.36V65.584L151.317 62.192L150.709 58.768V54.64H154.229V69.36C154.229 70.832 153.888 72.112 153.205 73.2C152.523 74.3093 151.573 75.1733 150.357 75.792C149.141 76.4107 147.733 76.72 146.133 76.72ZM145.973 69.68C144.608 69.68 143.371 69.3493 142.261 68.688C141.173 68.0053 140.309 67.0773 139.669 65.904C139.051 64.7307 138.741 63.4187 138.741 61.968C138.741 60.5173 139.051 59.216 139.669 58.064C140.309 56.912 141.173 56.0053 142.261 55.344C143.371 54.6613 144.608 54.32 145.973 54.32C147.189 54.32 148.256 54.5653 149.173 55.056C150.091 55.5467 150.805 56.2293 151.317 57.104C151.829 57.9573 152.085 58.96 152.085 60.112V63.888C152.085 65.0187 151.819 66.0213 151.285 66.896C150.773 67.7707 150.059 68.4533 149.141 68.944C148.224 69.4347 147.168 69.68 145.973 69.68ZM146.677 66.352C147.531 66.352 148.277 66.1707 148.917 65.808C149.557 65.4453 150.048 64.944 150.389 64.304C150.752 63.6427 150.933 62.8747 150.933 62C150.933 61.1253 150.752 60.368 150.389 59.728C150.048 59.0667 149.557 58.5547 148.917 58.192C148.277 57.8293 147.531 57.648 146.677 57.648C145.824 57.648 145.067 57.8293 144.405 58.192C143.765 58.5547 143.264 59.0667 142.901 59.728C142.539 60.368 142.357 61.1253 142.357 62C142.357 62.8533 142.539 63.6107 142.901 64.272C143.264 64.9333 143.765 65.4453 144.405 65.808C145.067 66.1707 145.824 66.352 146.677 66.352ZM158.14 70V46.96H161.66V70H158.14ZM172.713 70.32C171.177 70.32 169.79 69.9787 168.553 69.296C167.337 68.592 166.366 67.632 165.641 66.416C164.937 65.2 164.585 63.8347 164.585 62.32C164.585 60.8053 164.937 59.4507 165.641 58.256C166.345 57.04 167.294 56.08 168.489 55.376C169.705 54.672 171.049 54.32 172.521 54.32C173.95 54.32 175.209 54.6507 176.297 55.312C177.406 55.9733 178.27 56.88 178.889 58.032C179.529 59.184 179.849 60.496 179.849 61.968C179.849 62.224 179.828 62.4907 179.785 62.768C179.764 63.024 179.721 63.312 179.657 63.632H167.049V60.752H177.833L176.521 61.904C176.478 60.9653 176.297 60.176 175.977 59.536C175.657 58.896 175.198 58.4053 174.601 58.064C174.025 57.7227 173.31 57.552 172.457 57.552C171.561 57.552 170.782 57.744 170.121 58.128C169.46 58.512 168.948 59.056 168.585 59.76C168.222 60.4427 168.041 61.264 168.041 62.224C168.041 63.184 168.233 64.0267 168.617 64.752C169.001 65.4773 169.545 66.0427 170.249 66.448C170.953 66.832 171.764 67.024 172.681 67.024C173.47 67.024 174.196 66.8853 174.857 66.608C175.54 66.3307 176.116 65.9253 176.585 65.392L178.825 67.664C178.078 68.5387 177.172 69.2 176.105 69.648C175.038 70.096 173.908 70.32 172.713 70.32ZM192.085 61.552V58.352H197.685C198.453 58.352 199.125 58.2027 199.701 57.904C200.298 57.584 200.768 57.1467 201.109 56.592C201.45 56.016 201.621 55.344 201.621 54.576C201.621 53.808 201.45 53.1467 201.109 52.592C200.768 52.016 200.298 51.5787 199.701 51.28C199.125 50.96 198.453 50.8 197.685 50.8H192.085V47.6H197.877C199.285 47.6 200.544 47.888 201.653 48.464C202.784 49.04 203.669 49.8507 204.309 50.896C204.97 51.9413 205.301 53.168 205.301 54.576C205.301 55.984 204.97 57.2107 204.309 58.256C203.669 59.3013 202.784 60.112 201.653 60.688C200.544 61.264 199.285 61.552 197.877 61.552H192.085ZM189.557 70V47.6H193.237V70H189.557ZM208.39 70V46.96H211.91V70H208.39ZM222.259 70.32C220.872 70.32 219.614 69.968 218.483 69.264C217.374 68.56 216.488 67.6107 215.827 66.416C215.187 65.2 214.867 63.8453 214.867 62.352C214.867 60.8373 215.187 59.4827 215.827 58.288C216.488 57.072 217.374 56.112 218.483 55.408C219.614 54.6827 220.872 54.32 222.259 54.32C223.432 54.32 224.467 54.576 225.363 55.088C226.28 55.5787 227.006 56.2613 227.539 57.136C228.072 58.0107 228.339 59.0027 228.339 60.112V64.528C228.339 65.6373 228.072 66.6293 227.539 67.504C227.027 68.3787 226.312 69.072 225.395 69.584C224.478 70.0747 223.432 70.32 222.259 70.32ZM222.835 66.992C224.136 66.992 225.182 66.5547 225.971 65.68C226.782 64.8053 227.187 63.6853 227.187 62.32C227.187 61.4027 227.006 60.592 226.643 59.888C226.28 59.184 225.768 58.64 225.107 58.256C224.467 57.8507 223.71 57.648 222.835 57.648C221.982 57.648 221.224 57.8507 220.563 58.256C219.923 58.64 219.411 59.184 219.027 59.888C218.664 60.592 218.483 61.4027 218.483 62.32C218.483 63.2373 218.664 64.048 219.027 64.752C219.411 65.456 219.923 66.0107 220.563 66.416C221.224 66.8 221.982 66.992 222.835 66.992ZM226.963 70V65.872L227.571 62.128L226.963 58.416V54.64H230.483V70H226.963ZM239.35 70.16L232.79 54.64H236.661L241.142 66.032H240.022L244.758 54.64H248.662L241.526 70.16H239.35ZM234.774 76.4L239.542 66.576L241.526 70.16L238.678 76.4H234.774Z" fill="white"/>
            <path d="M40.9481 44.8367L19.1953 66.7704C19.4396 67.6036 19.8786 68.372 20.4787 69.0168C21.0788 69.6617 21.8242 70.1659 22.6579 70.4911C23.4915 70.8162 24.3914 70.9536 25.2887 70.8927C26.1859 70.8318 27.0569 70.5743 27.8349 70.1398L52.3109 56.7239L40.9481 44.8367Z" fill="#EA4335"/>
            <path d="M62.9435 41.1086L52.3592 35.2739L40.4453 45.3358L52.4077 56.6927L62.9113 50.9206C63.8418 50.4517 64.6212 49.7466 65.165 48.8817C65.7088 48.0169 65.9963 47.0253 65.9963 46.0145C65.9963 45.0036 65.7088 44.012 65.165 43.1472C64.6212 42.2824 63.8418 41.5773 62.9113 41.1084H62.9438L62.9435 41.1086Z" fill="#FBBC04"/>
            <path d="M19.1947 25.1497C19.0632 25.6175 18.9977 26.1002 19.0001 26.5848V65.3352C19.0014 65.8196 19.0668 66.3019 19.1947 66.7705L41.6932 45.3984L19.1947 25.1497Z" fill="#4285F4"/>
            <path d="M41.1102 45.9601L52.3596 35.274L27.916 21.7956C26.9964 21.2772 25.9504 21.0027 24.8846 21C22.2398 20.9951 19.9146 22.6845 19.1953 25.1341L41.1102 45.9601Z" fill="#34A853"/>
            </g>
            <defs>
            <filter id="filter0_d_1345_454" x="0" y="0" width="272" height="101" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1345_454"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1345_454" result="shape"/>
            </filter>
            </defs>
          </svg>
        </div>
      </div>

      <div className="footer__more">
        <h3 className="font-medium mb-3">LEARN MORE</h3>
        <h4>CookBook Community</h4>
        <h4>Feedback</h4>
        <h4>Blog</h4>
        <h4>Terms of Service</h4>
        <h4>Privacy Policy</h4>
        <div className="flex mt-10">

        </div>
      </div>

      <div className="footer__svgs">
        <PumpkinSvg className="hidden md:block" />
        <span className="mr-3 hidden md:block"></span>
        <LemonSvg className="hidden sm:block" />
        <TomatoSvg className="hidden sm:block" />
        <PepperSvg />
        <CarrotSvg />
      </div>
    </footer>
  )
}

export default Footer