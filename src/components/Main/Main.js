import React from 'react';
import PropTypes from 'prop-types';
import './Main.css';
import './WhiteBackground.css';
import './GoldBackground.css';

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
const Main = () => (


  
  <ScrollContainer>

    <ScrollPage>
      <Animator animation={batch(Fade(),Sticky())}>
      <svg class ="w-80 md:w-full" id="logo" width="1222" height="461" viewBox="0 0 1222 461" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path  fill-rule="evenodd" clip-rule="evenodd" d="M885.429 2.91472C875.392 7.86222 869.53 21.5278 872.582 32.8677C874.672 40.6298 884.451 49.8306 892.151 51.2755C906.037 53.8817 919.521 45.3407 922.681 31.9384C927.824 10.1346 905.72 -7.08529 885.429 2.91472ZM814.667 6.13365C814.65 7.64125 814.625 24.894 814.612 44.4709C814.601 64.0478 814.014 80.4214 813.307 80.8587C812.601 81.2943 810.336 79.8353 808.271 77.6131C802.553 71.4573 786.977 60.8038 774.755 54.6872C719.435 27.0066 652.32 39.5642 610.047 85.5053C585.485 112.197 573.456 143.164 573.456 179.696C573.456 217.127 585.745 248.289 611.052 275.027C630.192 295.25 648.682 306.761 674.815 314.723C686.915 318.411 691.365 318.938 711.311 319.047C739.522 319.202 750.928 316.67 774.755 304.957C806.744 289.231 827.401 267.077 842.136 232.695C852.096 209.456 852.298 206.806 852.298 99.8369V3.39113H833.5C816.654 3.39113 814.699 3.67635 814.667 6.13365ZM390.563 41.1063C357.255 45.4379 327.493 60.7725 304.647 85.3705C279.875 112.042 267.982 143.059 267.982 180.997C267.982 218.326 281.951 252.018 308.214 278.038C331.431 301.039 356.898 314.075 387.305 318.522C402.603 320.76 427.655 319.6 441.867 315.996C457.99 311.906 482.592 299.22 496.744 287.695L509.389 277.399L508.869 317.605L546.98 318.182L546.436 236.402C545.83 144.991 546.024 146.823 534.147 121.172C517.952 86.198 488.622 59.9403 451.272 46.9799C441.4 43.5541 415.894 39.3636 406.62 39.6441C403.174 39.7475 395.947 40.4057 390.563 41.1063ZM1065.77 41.1031C1042.88 44.0823 1019.06 53.4335 1000.36 66.7872C988.464 75.2765 970.941 93.9758 963.787 105.812C948.214 131.578 942.343 154.846 943.594 185.838C944.786 215.377 951.599 235.974 968.259 260.404C974.977 270.257 993.841 288.887 1004.25 295.951C1056.66 331.508 1127.95 326.908 1175 284.932C1206.16 257.143 1222 221.164 1222 178.195V160.107H1082.58V199.285H1181.62L1180.52 205.162C1177.54 221.113 1162.26 244.915 1146.4 258.306C1123.63 277.53 1089.22 285.424 1059.08 278.337C1035.53 272.801 1008.85 253.498 996.612 233.136C962.238 175.941 989.934 102.786 1053.27 83.4852C1078.18 75.8939 1103.27 78.0394 1128.01 89.8776C1138.99 95.1323 1143.74 98.6882 1155.11 110.155L1168.9 124.062H1189.92C1214.08 124.062 1212.98 125.49 1202.52 107.786C1181.21 71.6846 1141.01 45.8892 1098.46 41.0122C1083.31 39.2758 1079.73 39.2868 1065.77 41.1031ZM0.10496 81.7488H198.262L0 280.108L0.888226 317.605L253.883 318.408V279.21H55.7262L253.883 80.9558V42.57H0.10496V81.7488ZM436.384 83.3692C454.241 88.8856 465.061 95.4818 478.707 109.172C499.056 129.588 507.661 150.547 507.661 179.696C507.661 209.625 499.182 230.061 478.048 251.063C457.072 271.907 435.949 280.802 407.544 280.754C378.881 280.705 357.603 271.763 336.833 251.042C312.882 227.146 302.886 199.061 307.177 167.718C313.361 122.528 346.194 88.37 391.367 80.13C402.779 78.0472 424.131 79.5846 436.384 83.3692ZM732.916 81.0577C757.512 86.0318 782.21 102.322 796.035 122.688C808.215 140.631 813.309 157.654 813.251 180.221C813.176 209.414 804.475 230.179 783.521 251.172C768.895 265.825 755.717 273.503 736.933 278.312C724.755 281.431 702.588 281.442 689.379 278.337C665.825 272.801 639.147 253.498 626.91 233.136C581.321 157.281 646.622 63.6012 732.916 81.0577ZM878.929 318.56L916.526 317.855V81.7488H878.929V318.56ZM126.27 375.589C114.969 379.615 112.894 384.935 112.898 409.872C112.902 435.145 118.706 442.189 139.526 442.189C153.382 442.189 159.951 438.803 162.955 430.11C165.485 422.785 165.238 422.077 159.935 421.464C156.971 421.121 155.997 422.012 154.913 426.065C153.837 430.096 152.411 431.414 147.722 432.716C135.731 436.048 124.727 432.874 122.891 425.551C121.45 419.811 121.312 395.446 122.691 390.354C124.099 385.158 129.757 382.642 140.035 382.642C149.668 382.642 155.192 385.816 155.192 391.351C155.192 394.597 155.939 395.18 160.096 395.18C164.863 395.18 164.975 395.02 164.074 389.47C163.565 386.33 161.586 382.097 159.678 380.064C153.393 373.371 138.204 371.337 126.27 375.589ZM229.058 402.696C229.677 434.427 230.703 437.695 240.945 440.541C249.754 442.987 250.75 442.678 250.75 437.493C250.75 433.559 250.128 432.791 246.945 432.791C238.959 432.791 238.218 430.121 238.218 401.337V374.807H228.515L229.058 402.696ZM257.173 401.056C257.259 415.493 257.804 429.005 258.384 431.083C259.892 436.474 266.03 440.452 274.64 441.614L282.081 442.62V437.706C282.081 433.266 281.617 432.791 277.278 432.791C267.612 432.791 266.415 430.973 266.415 416.281V403.015H274.248C281.907 403.015 282.081 402.91 282.081 398.314C282.081 393.717 281.907 393.612 274.248 393.612H266.415V374.807H257.016L257.173 401.056ZM460.783 378.168C457.706 381.036 457.286 382.661 457.919 389.254C458.328 393.504 459.765 398.085 461.115 399.434C463.341 401.661 463.261 402.302 460.258 406.366C455.4 412.939 454.756 427.222 459.013 434.006C460.784 436.828 464.041 439.826 466.252 440.666C472.291 442.964 493.663 442.531 498.486 440.014C502.215 438.068 502.948 438.176 505.871 441.1C509.045 444.274 509.19 444.282 512.344 441.426L515.571 438.505L510.832 433.614C506.685 429.334 506.095 427.61 506.095 419.787V410.851H501.218C496.689 410.851 496.39 411.188 497.029 415.553C497.408 418.138 497.435 420.254 497.089 420.254C496.741 420.254 489.782 414.089 481.624 406.554C468.506 394.438 466.844 392.309 467.253 388.14L467.715 383.426L482.988 382.978C498.055 382.534 498.262 382.476 498.262 378.668V374.807H481.326C466.173 374.807 464.01 375.161 460.783 378.168ZM548.391 442.194H562.579C579.452 442.194 589.242 440.019 593.691 435.28C598.124 430.56 600.638 415.832 599.531 401.077C597.844 378.588 592.984 374.807 565.778 374.807H548.391V442.194ZM767.706 403.449C767.706 435.692 768.301 437.772 778.325 440.558C787.068 442.986 788.071 442.671 788.071 437.493C788.071 433.559 787.449 432.791 784.265 432.791C776.279 432.791 775.538 430.121 775.538 401.337V374.807H767.706V403.449ZM1084.17 401.84C1084.18 420.279 1084.81 430.119 1086.15 432.791C1088.56 437.615 1097.3 442.188 1104.12 442.191C1108.73 442.194 1109.21 441.752 1109.21 437.493C1109.21 433.094 1108.83 432.791 1103.26 432.791C1094.66 432.791 1093.54 430.873 1093.54 416.023V403.015H1101.38C1109.04 403.015 1109.21 402.91 1109.21 398.314C1109.21 393.717 1109.04 393.612 1101.38 393.612H1093.54V374.807H1084.15L1084.17 401.84ZM585.701 385.962C589.829 388.54 591.231 396.776 590.456 413.877C589.688 430.763 588.521 431.843 570.268 432.555L556.224 433.103V408.917C556.224 395.615 556.752 384.183 557.399 383.512C559.202 381.641 581.935 383.608 585.701 385.962ZM175.821 413.83C176.468 439.353 177.526 440.977 194.109 441.914C214.256 443.053 217.829 438.201 217.843 409.676L217.853 393.612H208.454V410.723C208.454 420.133 208.039 428.916 207.531 430.237C206.337 433.352 194.842 435.073 189.314 432.964L185.056 431.34L184.172 394.396L175.303 393.38L175.821 413.83ZM289.05 395.607C287.571 399.459 289.451 430.486 291.411 434.578C294.01 440.006 299.161 442.194 309.335 442.194C320.22 442.194 326.663 439.817 328.861 434.99C329.876 432.763 330.643 423.008 330.643 412.345C330.643 393.634 330.639 393.612 326.896 393.612C323.196 393.612 323.141 393.835 322.579 411.566C322.201 423.49 321.329 430.199 319.981 431.547C317.296 434.233 303.617 434.148 300.337 431.425C298.205 429.654 297.746 426.117 297.746 411.443V393.612H293.781C291.599 393.612 289.47 394.51 289.05 395.607ZM351.791 395.784C343.296 399.488 342.441 401.816 341.839 422.845L341.286 442.194H351.008V424.485C351.008 412.801 351.647 406.137 352.888 404.896C353.922 403.862 358.152 403.015 362.287 403.015C369.598 403.015 369.807 402.885 369.807 398.314C369.807 393.818 369.515 393.616 363.149 393.674C359.488 393.708 354.376 394.658 351.791 395.784ZM384.634 395.104C377.976 397.803 376.856 401.116 376.856 418.094C376.856 438.793 378.504 441.003 394.625 441.914C406.634 442.592 414.272 439.864 416.051 434.258C417.247 430.488 417.193 430.408 412.487 428.96C410.029 428.204 408.677 428.599 408.041 430.257C406.849 433.365 395.327 435.06 389.78 432.945C386.391 431.652 385.472 430.29 385.472 426.562V421.821H418.369L418.36 415.944C418.345 405.763 415.518 398.541 410.541 395.966C405.674 393.448 390.004 392.926 384.634 395.104ZM617.032 396.305C611.804 399.549 611.101 402.138 611.074 418.221C611.04 438.659 614.184 442.194 632.395 442.194C641.612 442.194 643.077 441.741 647.203 437.613C649.722 435.093 651.782 432.356 651.782 431.528C651.782 428.798 644.254 428.458 641.644 431.069C637.865 434.847 623.998 434.485 621.108 430.533C619.886 428.859 618.885 426.215 618.885 424.656C618.885 422.102 620.508 421.821 635.334 421.821H651.782V412.298C651.782 403.862 651.259 402.251 647.203 398.193C643.025 394.014 641.688 393.616 631.93 393.655C624.742 393.681 619.856 394.551 617.032 396.305ZM659.615 395.154C659.615 396.117 663.97 407.129 669.293 419.626C678.39 440.984 679.212 442.32 682.97 441.879C686.517 441.464 688.068 438.839 696.678 418.687C702.016 406.189 706.435 395.435 706.498 394.788C706.561 394.141 704.585 393.612 702.11 393.612C697.878 393.612 697.166 394.64 690.125 410.936L682.64 428.261L675.368 411.327C668.895 396.258 667.629 394.341 663.856 393.901C661.482 393.622 659.615 394.175 659.615 395.154ZM721.438 395.023C714.749 397.905 713.66 401.136 713.66 418.101C713.66 432.84 713.977 434.587 717.229 437.841C720.385 441 722.341 441.411 734.207 441.411C746.41 441.411 747.888 441.078 750.612 437.711C752.26 435.676 753.607 433.114 753.607 432.017C753.607 428.983 746.857 427.739 744.863 430.404C742.557 433.487 731.86 434.979 726.584 432.954C723.199 431.655 722.276 430.287 722.276 426.562V421.821H755.603L754.771 411.453C753.616 397.068 750.933 394.584 735.969 394.053C729.731 393.832 723.191 394.267 721.438 395.023ZM801.798 395.98C796.558 398.928 795.12 403.648 795.12 417.903C795.12 432.647 796.538 436.93 802.429 439.978C809.833 443.808 827.618 442.506 832.333 437.789C835.529 434.592 835.85 432.777 835.85 417.903C835.85 403 835.533 401.218 832.311 397.996C829.4 395.084 826.761 394.377 817.429 394.012C809.432 393.699 804.822 394.28 801.798 395.98ZM852.778 397.391L848.382 401.171L847.409 461H856.998V441.262L866.936 441.895C884.376 443.006 889.878 437.253 889.878 417.903C889.878 398.92 884.954 393.612 867.345 393.612C858.854 393.612 856.447 394.236 852.778 397.391ZM907.207 395.849C901.708 398.895 901.094 401.567 900.971 422.997L900.861 442.194H908.694L908.715 426.131C908.726 417.297 909.157 408.499 909.671 406.581C910.804 402.349 919.578 400.194 925.211 402.761C928.814 404.404 928.975 405.181 929.4 422.94L929.842 441.411L938.458 442.403V425.187C938.458 415.72 938.877 406.877 939.393 405.537C940.626 402.321 949.14 400.821 954.53 402.873L958.823 404.504V442.194H968.471L967.954 421.682C967.445 401.425 967.384 401.122 963.043 397.391C959.506 394.351 956.897 393.612 949.685 393.612C944.36 393.612 939.394 394.542 937.455 395.902C934.62 397.888 933.797 397.894 931.231 395.951C927.453 393.089 912.306 393.025 907.207 395.849ZM983.621 398.339C978.907 403.054 978.896 403.103 979.433 418.673C980.107 438.226 982.013 440.848 996.302 441.882C1001.47 442.257 1007.47 442.119 1009.63 441.575C1013.94 440.495 1019.92 434.865 1019.92 431.895C1019.92 428.878 1012.57 428.278 1009.78 431.069C1006.95 433.899 992.846 434.582 990.366 432.008C989.538 431.146 988.621 428.677 988.33 426.523L987.803 422.605L1020.7 421.038L1020.43 413.401C1020.28 409.201 1019.74 404.101 1019.23 402.067C1017.86 396.582 1010.65 393.612 998.727 393.612C989.268 393.612 987.926 394.032 983.621 398.339ZM1038.34 395.98C1032.76 399.126 1031.75 403.391 1031.7 424.172L1031.67 441.411L1040.28 442.403L1040.31 424.667C1040.32 414.913 1040.97 405.913 1041.76 404.667C1043.62 401.727 1059.66 401.407 1062.51 404.253C1063.87 405.615 1064.65 412.011 1064.91 423.843C1065.28 441.332 1065.3 441.412 1069.23 441.906L1073.18 442.403V422.796C1073.18 404.379 1072.95 402.926 1069.43 398.833C1066.06 394.905 1064.54 394.429 1054.16 394.021C1045.98 393.7 1041.39 394.271 1038.34 395.98ZM407.685 404.987C408.365 406.057 408.932 408.519 408.946 410.459C408.968 413.805 408.368 413.985 397.221 413.985H385.472V409.234C385.472 405.795 386.446 404.067 388.997 402.981C393.478 401.074 406.059 402.423 407.685 404.987ZM640.961 404.1C641.694 404.833 642.49 407.181 642.729 409.317C643.157 413.122 642.916 413.211 631.026 413.659C620.091 414.072 618.885 413.829 618.885 411.216C618.885 407.836 621.794 403.771 625.151 402.457C628.234 401.251 639.259 402.398 640.961 404.1ZM741.756 402.976C744.847 404.152 745.774 405.6 745.774 409.245V413.985H722.276V409.234C722.276 405.77 723.232 404.097 725.801 403.064C730.546 401.157 736.878 401.121 741.756 402.976ZM823.216 402.976C827.096 404.452 827.234 404.963 827.234 417.903C827.234 431.077 827.162 431.329 822.926 432.945C817.357 435.07 805.857 433.365 804.659 430.237C803.344 426.813 803.56 407.269 804.934 405.209C807.411 401.5 816.434 400.398 823.216 402.976ZM879.099 404.803C880.624 407.211 880.985 426.559 879.573 430.237C878.375 433.365 866.875 435.07 861.306 432.945C857.07 431.329 856.998 431.078 856.998 417.892C856.998 405.474 857.26 404.371 860.523 402.981C865.265 400.961 877.421 402.153 879.099 404.803ZM1010.66 404.76C1011.42 405.955 1012.05 408.549 1012.06 410.525C1012.08 414.003 1011.69 414.103 999.944 413.659C988.005 413.21 987.811 413.136 988.309 409.284C989.085 403.264 992.996 401.102 1001.68 401.893C1005.86 402.276 1009.9 403.565 1010.66 404.76ZM483.189 419.757C489.325 425.518 494.581 430.807 494.867 431.511C495.156 432.216 489.364 432.791 482 432.791C470.364 432.791 468.396 432.395 466.986 429.76C463.609 423.446 465.915 409.284 470.322 409.284C471.263 409.284 477.054 413.998 483.189 419.757Z" 
        fill="#DFE2E1" />
      </svg>

      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator>
        <span></span>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={FadeUp}>
        <p class="md:w-auto w-screen  md:text-8xl text-4xl text-[#DFE2E1]">
          Who Are We?
        </p>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator>
        <span></span>
      </Animator>
    </ScrollPage>

    <div class="white-animated-background bg-[#DFE2E1]"> 
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
      <ScrollPage>
        <Animator animation={batch(FadeIn(), Sticky(50,45))}>
          <p class="md:w-auto w-screen p-4 md:text-4xl text-xl text-[#3B415F] ">
            A woman-led, privately owned company based in Lebanon.
          </p>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(FadeIn(),MoveOut(0,30), Sticky(50,57))}>
          <p class="md:w-auto w-screen p-4 md:text-1xl text-xl text-[#3B415F] ">
            Our aim is to contribute to the development of society through empowering its members on cultural, educational, and professional levels.
          </p>
        </Animator>
      </ScrollPage>
    </div>
    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky())}>
        <span></span>
      </Animator>
    </ScrollPage>

    <ScrollPage >
      <Animator animation={FadeUp}>
        <p class="md:w-auto w-screen  md:text-8xl text-4xl text-[#DFE2E1] ">
          Our Vision
        </p>
      </Animator>
    </ScrollPage>
    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky())}>
      </Animator>
    </ScrollPage>

    <div class="white-animated-background bg-[#DFE2E1]"> 
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
      <ScrollPage>
        <Animator animation={batch(FadeIn(), Sticky(50,43))}>
          <p class="md:w-auto w-screen p-4 md:text-4xl text-xl text-[#3B415F] ">
            We strongly believe that we are born on this earth to persevere towards creating a brighter future for people.
          </p>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(FadeIn(),MoveOut(0,30), Sticky(50,62))}>
          <p class="md:w-auto w-screen p-4 md:text-1xl text-xl text-[#3B415F] ">
          As a company, we aspire to contribute to the development of society and empowering its members on the cultural, educational and professional levels so that our tomorrow will be better, brighter, and blooming.
          </p>
        </Animator>
      </ScrollPage>
    </div>
    <ScrollPage>
      <Animator>
        <span></span>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={FadeUp}>
        <p class="md:w-auto w-screen  md:text-8xl text-4xl text-[#DFE2E1]">
          Our Mission
        </p>
      </Animator>
    </ScrollPage>
    <ScrollPage>
      <Animator>
      </Animator>
    </ScrollPage>
    <div class="white-animated-background bg-[#DFE2E1]">
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
    <ScrollPage>
        <Animator animation={batch(FadeIn(), Sticky(50,43))}>
          <p class="md:w-auto w-screen p-4 md:text-4xl text-xl text-[#3B415F] ">
            Support individuals and groups to lead their own journey of self-development by building and advancing their knowledge and skills.
          </p>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(FadeIn(),MoveOut(0,30), Sticky(50,62))}>
          <p class="md:w-auto w-screen p-4 md:text-1xl text-xl text-[#3B415F] ">
            Contributing to the planning and implementation of targeted projects locally, regionally, and globally; and benefiting from local and international experiences in the fields.
          </p>
        </Animator>
      </ScrollPage>
    </div>

    
    <ScrollPage>
      <Animator animation={FadeUp}>
        <p class="md:w-auto w-screen  md:text-8xl text-4xl text-[#DFE2E1]">
          Our Values
        </p>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator>
        <span></span>
      </Animator>
    </ScrollPage>



    {/* <ScrollPage>
      <Animator animation={batch(Fade(),MoveOut(-800,0),Sticky())}>
      <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Passion
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          We do what we do because we see it as a genuine contribution to elevating communities.
        </p>
      </a>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={batch(Fade(),MoveOut(-800,0),Sticky())}>
      <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Cooperation
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          We cherish teamwork, preserve team spirit, and value the society for which we work.
        </p>
      </a>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={batch(Fade(),MoveOut(-800,0),Sticky())}>
      <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Transparency
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          We uphold the values of transparency, honesty, and respect for the law and ethical standards throughout our relationships and at work.
        </p>
      </a>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={batch(Fade(),MoveOut(-800,0),Sticky())}>
      <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Pioneering
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          We innovate ideas and projects, encourage new experiences, and pursue opportunities to create value.
        </p>
      </a>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={batch(Fade(),MoveOut(-800,0),Sticky())}>
      <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Quality
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          We are committed to providing high quality services and projects.
        </p>
      </a>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={batch(Fade(),MoveOut(-800,0),Sticky())}>
      <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Empowerment
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          We promote awareness and respect the rights of individuals, women, children, people with special needs and marginalized groups, and provide them with opportunities that cater to their needs.
        </p>
      </a>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={batch(Fade(),MoveOut(-800,0),Sticky())}>
      <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Environment
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          We value the environment and practice sound behavior towards it. 
        </p>
      </a>
      </Animator>
    </ScrollPage> */}

{/* Our Values Section */}
    <div>
            {/* first row */}
            <div class="sm:flex flex-wrap justify-center items-center text-center gap-8">
                <div class=" cursor-pointer
                    transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105
                    w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
                    <div class="flex-shrink-0">
                        <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-50">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                        </svg>
                        </div>
                    </div>
                    <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                        Passion
                    </h3>
                    <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
                        We do what we do because we see it as a genuine contribution to elevating communities.
                    </p>
                </div>
                <div class=" cursor-pointer
                    transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105
                    w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
                    <div class="flex-shrink-0">
                        <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-50">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                        </div>
                    </div>
                    <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                        Cooperation
                    </h3>
                    <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
                        We cherish teamwork, preserve team spirit, and value the society for which we work.
                    </p>
                </div>
                <div class=" cursor-pointer
                    transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105
                    w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
                    <div class="flex-shrink-0">
                        <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-50">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                        </svg>
                    </div>
                    </div>
                    <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                        Transparency
                    </h3>
                    <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
                        We uphold the values of honesty and respect for the law and ethical standards throughout our relationships and at work.
                    </p>
                </div>
            </div>
            {/* second row */}
            <div class="sm:flex flex-wrap justify-center items-center text-center gap-8">
                <div class=" cursor-pointer
                    transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105
                    w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
                    <div class="flex-shrink-0">
                        <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md  ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-50">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
                        </svg>
                        </div>
                    </div>
                    <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                        Pioneering
                    </h3>
                    <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
                      We innovate ideas and projects, encourage new experiences, and pursue opportunities to create value.
                    </p>
                </div>
                <div class=" cursor-pointer
                transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105
                w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
                    <div class="flex-shrink-0">
                        <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md  ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-50">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                        </div>
                    </div>
                    <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                        Quality
                    </h3>
                    <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
                        We are committed to providing high quality services and projects.
                    </p>
                </div>
                <div class=" cursor-pointer
                    transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105
                    w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
                    <div class="flex-shrink-0">
                        <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md  ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-50">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                    </div>
                    </div>
                    <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                      Environment
                    </h3>
                    <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
                      We value the environment and practice sound behavior towards it. 
                    </p>
                </div>
            </div>
            <div class="sm:flex flex-wrap justify-center items-center text-center gap-8">
                <div class=" cursor-pointer
                    transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105
                    w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
                        <div class="flex-shrink-0">
                            <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md  ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-50">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                            </svg>
                            </div>
                        </div>
                        <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                          Empowerment
                        </h3>
                        <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
                          We promote awareness and respect the rights of individuals, women, children, people with special needs and marginalized groups, and provide them with opportunities that cater to their needs.
                        </p>
                </div>
            </div>
    </div>

    <ScrollPage>
      <Animator>
        <span></span>
      </Animator>
    </ScrollPage>

  </ScrollContainer>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
