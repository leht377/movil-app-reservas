import * as React from "react";
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg";
const ChefIcon = (props) => (
  <Svg width={256} height={210} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#F50057"
        d="M93.188 208.549c51.467 0 93.189-1.567 93.189-3.5 0-1.934-41.722-3.501-93.189-3.501-51.466 0-93.188 1.567-93.188 3.501 0 1.933 41.722 3.5 93.188 3.5ZM68.69 6.355C74.626.78 83.945-.357 92.428.087c26.643 1.395 50.693 14.952 71.497 30.287 7.531 5.552 14.946 11.535 19.835 19.18 9.951 15.562 6.999 37.121-6.839 49.942-4.708 4.362-10.415 7.706-16.274 10.67-10.419 5.27-21.659 9.502-33.484 10.706-8.432.859-16.968.16-25.351-1.038-23.42-3.348-46.41-10.751-65.678-23.416-8.45-5.555-16.416-12.461-19.9-21.448-3.483-8.987-1.254-20.374 7.376-25.694 3.569-2.2 7.836-3.193 12.014-4.126 6.15-1.374 12.397-2.727 17.947-5.52 5.731-2.883 12.518-8.46 11.383-14.842-1.217-6.849-2.194-12.863 3.736-18.433ZM231.077 210c13.764 0 24.923-1.041 24.923-2.324 0-1.284-11.159-2.324-24.923-2.324-13.765 0-24.923 1.04-24.923 2.324 0 1.283 11.158 2.324 24.923 2.324Z"
        opacity={0.1}
      />
      <Path
        fill="url(#b)"
        d="M129.986 79.09c-.406-.828-2.551-5.973-2.551-5.973l-3.594-9.817s-2.551-4.139-2.551-4.908c0-.769-4.638-3.844-4.638-3.844s-3.768-1.182-4.058-1.3c-.29-.119-4.754-1.675-4.754-1.675s-1.758-2.437-2.008-1.8l-.001.001-.027-.046a6.53 6.53 0 0 1-.67-2.278c-.01-.071-.018-.146-.027-.22a8.92 8.92 0 0 0 2.765-3.24 9.457 9.457 0 0 0 1.011-4.226c0-.388-.025-.775-.074-1.16a.726.726 0 0 1 .1-.055c.072-.033.054-.06.001-.088l.054-.03c.096-.043.032-.076-.061-.116l.006-.003c.131-.06-.035-.1-.168-.163l-.021-.123a.88.88 0 0 0 .053-.243c.012.006.023.013.035.018.033-.152.032-.31-.002-.462a1.34 1.34 0 0 1-.03.09.815.815 0 0 0-.078-.398.762.762 0 0 0-.26-.301l-.021-.02.246-2.652c3.626-.18 4.262-6.682 3.435-7.043-.827-.361 0-1.144 0-2.709 0-1.565-2.735-3.31-2.735-3.31s-1.145.602-2.926-2.408c-1.781-3.01-8.332-3.491-8.777-2.709-.445.783-3.37 1.806-7.187 2.95-3.816 1.143-3.116 5.899-2.48 6.922.524.846.83 1.82.89 2.83 0 .601 1.209 3.13 1.209 3.13-.382.875.588 5.674.876 7.038l-.014.126-.008.012a.657.657 0 0 0-.037.068.824.824 0 0 0-.058.453.992.992 0 0 0 .064.494 9.425 9.425 0 0 0 .827 3.711 8.98 8.98 0 0 0 2.208 3.02l.013.249c.054 1.114.084 2.432.028 3.693l-.01.191c-.211.045-.408.142-.577.282-.168.14-.303.32-.394.525-.36.728-2.446 1.852-2.446 1.852s-3.653.177-4 .887c-.348.71-5.624 3.075-5.624 3.075s-2.783 1.715-2.377 3.666c.212 1.02-.383 2.604-1 3.885a16.776 16.776 0 0 0-4.002-1.052l2.955 2.98c-.061.102-.098.16-.098.16l-1.681 6.269s-.58 2.188-1.16 2.72.522 5.381.522 5.381-.638 3.43-1.16 4.317c-.521.887.812 3.075.812 3.075l2.667 6.387 7.073 1.892 1.233.277-.074.456c-.34 2.035-.788 3.906-1.333 4.412-1.333 1.242-1.275 6.801-1.275 6.801l.058 7.865s.463 9.698.231 10.053c-.146.224.148.589.923.917-.022.146-.044.294-.065.445-.217 1.609-.315 3.444.186 4.256.218.438.337.924.348 1.419 0 .769 1.101 2.365 1.101 2.365s-.87 6.564.58 8.812c1.45 2.247 2.667 6.327 1.971 7.273 0 0-1.217 2.78-.638 4.022.58 1.241 0 1.951-.753 2.247-.754.295-.689 2.72-.689 2.72l1.385 11.531s.753 2.366.115 3.194c-.637.828-.637 4.967.348 6.386.986 1.42-1.391 4.022-1.391 4.022s-1.45 2.188.87 2.897c0 0 .463.119-.406 1.065-.87.946-1.044 2.129-.464 2.543.12.076.246.141.376.197-.022.14-.045.285-.072.439-.223 1.235-.643 2.843-1.406 3.621a25.746 25.746 0 0 0-3.796 5.332c-.795 1.59-1.143 3.078-.262 3.775 2.087 1.656 4.754 2.188 6.32 1.538 1.565-.651 3.768-2.661 3.768-2.661l.521-2.307s-.347-1.419 1.392-1.951c1.739-.532 3.362-2.425 3.362-2.425v-3.065c.421-.254.828-.533 1.218-.838 0 0 .811-3.015 0-4.021-.812-1.005-1.102-1.36-.058-2.01 1.043-.651 1.185-2.07.42-3.312-.768-1.242-1.986-3.075-.942-5.677 1.043-2.602 1.426-10.585 1.426-10.585s-.487-5.441 0-6.683-.556-3.725-.556-3.725.347-3.075.985-4.495c.638-1.419 1.16-8.929 1.16-8.929s1.159-3.193 1.159-5.263-1.797-7.037.87-8.338c0 0 1.159 1.064.695 5.322 0 0 1.334 4.967 1.334 6.505 0 1.537.985 7.096.985 7.096s.116 1.774.522 2.425c.406.65 0 2.424 0 2.424s1.507 1.479 1.102 2.425c-.406.946.069 3.08.069 3.08l-.359 13.241s-1.044 5.677 1.391 9.107c0 0-.87 5.027-1.391 5.382-.522.354 1.913 3.43 1.913 3.43s-.675 1.992.696 2.089v3.292a6.904 6.904 0 0 0 1.913 2.247c1.275.946.753 4.199.753 4.199s1.624 4.139 5.914 3.252c4.29-.887 4.869-1.301 4.638-2.779a33.829 33.829 0 0 0-.536-2.595c-.462-1.9-1.169-4.192-2.015-5.322-1.334-1.781-2.435-5.507-2.435-5.507s-.522-1.242 0-1.656c.522-.414.29-1.183.29-1.183s.508-1.537.051-2.483c-.457-.946.876-2.898.876-2.898l-.406-9.107.406-13.246s-1.797-2.188-1.043-3.489c.753-1.301-.87-3.134-.87-3.134s-.174-.06.29-1.538a3.868 3.868 0 0 0-.116-2.661s-.986-3.667.754-6.446c0 0 .753-3.666.985-5.559.16-1.315 1.162-6.228 1.758-9.102l.097-.466c.858.049 1.508.107 1.508.107s-1.334-9.758 0-11.769c1.333-2.01-1.044-17.385-1.044-17.385s-.568-2.688-.918-5.43c-.02-.155-.038-.311-.057-.468a26.682 26.682 0 0 1 3.236-.075c2.783.177 5.508-.946 5.566-2.07.058-1.124 1.565-5.559 1.797-6.564.232-1.005.406-4.435 0-5.263Z"
      />
      <Path
        fill="#4C495A"
        d="M96.158 193.17v5.475s-1.564 1.884-3.24 2.414c-1.676.53-1.34 1.943-1.34 1.943l-.503 2.297s-2.123 2.001-3.631 2.649c-1.508.648-4.078.118-6.09-1.531-.848-.694-.513-2.176.253-3.759a25.635 25.635 0 0 1 3.658-5.308c.735-.775 1.14-2.376 1.354-3.606.159-.92.21-1.634.21-1.634l9.33 1.06Z"
      />
      <Path
        fill="#000"
        d="M96.158 197.256v1.389s-1.564 1.884-3.24 2.414c-1.676.53-1.34 1.943-1.34 1.943l-.503 2.297s-2.123 2.001-3.631 2.649c-1.508.648-4.078.118-6.09-1.531-.848-.694-.513-2.176.253-3.759-.035 1.663.432 3.531 2.709 3.465 2.457-.082 4.825-.99 6.759-2.591 0 0-.056-3.886 2.513-4.769a7.727 7.727 0 0 0 2.57-1.507Z"
        opacity={0.1}
      />
      <Path
        fill="#4C495A"
        d="M116.603 207.183c-4.133.883-5.697-3.239-5.697-3.239s.502-3.238-.727-4.18a6.85 6.85 0 0 1-1.843-2.237v-5.417l5.027-3.768 2.722 2.539.183.169s1.062 3.709 2.346 5.483c.816 1.126 1.498 3.408 1.942 5.299.257 1.088.436 2.046.516 2.583.224 1.472-.335 1.885-4.469 2.768Z"
      />
      <Path
        fill="#000"
        d="M116.603 207.183c-4.133.883-5.697-3.239-5.697-3.239s.502-3.238-.727-4.18a6.86 6.86 0 0 1-1.843-2.237v-2.099c.798.888 2.301 2.607 2.625 3.335.447 1.001.503 4.651 2.57 5.299 2.067.648 6.089 1.237 6.424-.412.14-.627.341-1.236.601-1.818.257 1.088.436 2.046.516 2.583.224 1.472-.335 1.884-4.469 2.768ZM86.83 192.11l9.328 1.06v2.894c-1.052.657-2.56 1.354-3.407.638-1.252-1.055-4.972-2.395-6.132-2.958.159-.921.21-1.634.21-1.634ZM116.268 191.521c-1.285-.471-3.575 1.59-6.591 2.885a3.02 3.02 0 0 1-1.341.316v-2.612l5.027-3.768 2.722 2.539c.042.219.103.433.183.64Z"
        opacity={0.1}
      />
      <Path
        fill="#5F5D7E"
        d="m119.564 126.696-.429 2.125c-.574 2.861-1.539 7.753-1.694 9.062-.223 1.884-.949 5.535-.949 5.535-1.676 2.767-.726 6.417-.726 6.417.339.84.379 1.782.111 2.65-.447 1.472-.279 1.531-.279 1.531s1.564 1.825.838 3.12c-.726 1.296 1.005 3.474 1.005 3.474l-.391 13.189.391 9.067s-1.284 1.943-.844 2.885c.44.942-.049 2.473-.049 2.473s.223.765-.28 1.178c-.502.412 0 1.648 0 1.648-1.285-.471-3.575 1.59-6.591 2.885-3.017 1.295-2.011-1.766-2.011-1.766s-2.347-3.062-1.844-3.415c.503-.353 1.341-5.358 1.341-5.358-2.346-3.415-1.341-9.067-1.341-9.067l.347-13.184s-.459-2.125-.068-3.067c.392-.942-1.061-2.414-1.061-2.414s.391-1.766 0-2.414c-.391-.647-.503-2.414-.503-2.414s-.949-5.534-.949-7.065c0-1.531-1.285-6.477-1.285-6.477.447-4.239-.67-5.299-.67-5.299-2.57 1.296-.838 6.241-.838 8.302s-1.118 5.24-1.118 5.24-.502 7.478-1.117 8.891c-.614 1.413-.95 4.475-.95 4.475s1.006 2.473.537 3.709c-.47 1.236 0 6.653 0 6.653s-.369 7.949-1.374 10.539c-1.006 2.591.167 4.416.907 5.653.737 1.236.6 2.649-.405 3.297-1.005.648-.726 1.001.056 2.002s0 4.003 0 4.003-3.184 2.65-4.58 1.472c-1.397-1.177-5.866-2.708-6.425-3.12-.558-.412-.39-1.59.447-2.532.838-.942.391-1.06.391-1.06-2.234-.706-.838-2.885-.838-2.885s2.29-2.59 1.341-4.003c-.95-1.414-.95-5.535-.335-6.359.615-.825-.112-3.18-.112-3.18l-1.334-11.481s-.062-2.414.664-2.708c.726-.295 1.285-1.001.726-2.238-.558-1.236.615-4.003.615-4.003.67-.942-.503-5.005-1.9-7.242-1.396-2.238-.558-8.773-.558-8.773s-1.062-1.59-1.062-2.355a3.437 3.437 0 0 0-.335-1.413c-.483-.808-.389-2.636-.179-4.237.204-1.55.514-2.888.514-2.888l35.193.942Z"
      />
      <Path
        fill="#FDC2CC"
        d="m108.615 59.987-11.004 2.709s-5.42-4.828-4.078-7.419c.46-.89.663-2.409.733-4.015a42.463 42.463 0 0 0-.027-3.677 54.952 54.952 0 0 0-.204-2.788s11.284-6.712 10.893 0a18.153 18.153 0 0 0 .074 3.354c.08.791.299 1.56.646 2.268.603 1.132 1.347 1.149 1.347 1.149l1.62 8.42Z"
      />
      <Path
        fill="#000"
        d="M105.002 48.15a8.34 8.34 0 0 1-5.475 1.7c-1.955-.104-3.82-.901-5.288-2.265a54.963 54.963 0 0 0-.204-2.788s11.284-6.712 10.893 0a18.154 18.154 0 0 0 .074 3.354Z"
        opacity={0.1}
      />
      <Path
        fill="#FDC2CC"
        d="M99.957 49.625c4.782 0 8.658-4.086 8.658-9.126 0-5.04-3.876-9.126-8.658-9.126s-8.659 4.086-8.659 9.126c0 5.04 3.877 9.126 8.659 9.126Z"
      />
      <Path
        fill="#000"
        d="m108.615 59.987-11.004 2.709s-5.42-4.828-4.078-7.419c.46-.89.663-2.41.733-4.015a5.984 5.984 0 0 0 2.004 3.544c2.514 1.767 2.123 3.945 2.123 3.945l4.524-.177c-.279-1.943 1.397-3.002 1.956-3.238.558-.235.279-1.295.279-1.295l.496-3.622c.603 1.132 1.347 1.149 1.347 1.149l1.62 8.42ZM119.564 126.696l-.429 2.125c-1.215-.069-2.822-.118-3.537.054-1.229.294-6.145.412-6.145.412l-12.178.455v-.396c-1.4.012-2.8.11-4.19.294-2.066.295-5.306-.118-7.373-.471a7.631 7.631 0 0 1-1.855-.527c.204-1.55.514-2.888.514-2.888l35.193.942Z"
        opacity={0.1}
      />
      <Path
        fill="#F50057"
        d="M118.614 89.309c-.176 1.1-.046 2.922.177 4.722.337 2.73.885 5.405.885 5.405s2.29 15.308 1.005 17.31c-1.284 2.002 0 11.717 0 11.717s-3.854-.354-5.083-.059c-1.229.294-6.145.412-6.145.412l-12.178.455v-.396c-1.4.012-2.8.11-4.19.294-2.066.295-5.306-.118-7.373-.471s-2.905-1.06-2.681-1.413c.223-.353-.224-10.009-.224-10.009l-.056-7.831s-.056-5.534 1.23-6.771c.524-.504.956-2.367 1.284-4.392.472-2.932.726-6.206.726-6.206l-8.49-23.963-.168-.471s2.458-4.004 2.067-5.947c-.391-1.943 2.29-3.65 2.29-3.65s5.083-2.356 5.419-3.062c.335-.707 3.854-.883 3.854-.883s2.011-1.119 2.357-1.844c.085-.203.214-.382.376-.521.163-.14.355-.237.56-.282a5.998 5.998 0 0 0 2.014 3.589c2.514 1.766 2.123 3.945 2.123 3.945l4.524-.177c-.279-1.943 1.397-3.003 1.956-3.238.558-.236.279-1.296.279-1.296l.523-3.813c.241-.633 1.935 1.793 1.935 1.793s4.301 1.55 4.58 1.667c.28.118 3.911 1.295 3.911 1.295s4.469 3.062 4.469 3.827c0 .766 2.458 4.887 2.458 4.887l-.083.467c-.568 3.245-3.922 22.378-4.331 24.91Z"
      />
      <Path
        fill="#FDC2CC"
        d="M100.739 79.77s-9.664-2.708-10.614-3.355c-.95-.648-6.536 3.12.28 8.242 0 0 8.333 1.826 10.562 0 2.23-1.825-.228-4.886-.228-4.886Z"
      />
      <Path
        fill="#000"
        d="m121.631 63.638 1.173.059 3.464 9.774s2.066 5.122 2.457 5.946c.392.825.224 4.24 0 5.24-.223 1.001-1.675 5.417-1.731 6.536-.056 1.119-2.682 2.237-5.363 2.06-2.681-.176-8.938.707-8.938.707s-6.682-.736-10.781 1.472c0 0-2.626-5.711-2.346-16.368 0 0 4.636-.294 5.809.177 1.173.47 6.871 1.825 7.598 1.118.726-.706 4.022 1.296 4.022 1.296a3.132 3.132 0 0 0 0-2.473c-.559-1.413-1.509-5.83-.28-7.242 1.229-1.413 4.916-8.302 4.916-8.302Z"
        opacity={0.1}
      />
      <Path
        fill="#000"
        d="M118.791 94.03c-2.773.199-5.874.637-5.874.637s-6.681-.737-10.782 1.472c0 0-2.625-5.712-2.346-16.368 0 0 4.637-.295 5.81.176s6.871 1.825 7.597 1.119c.726-.707 4.022 1.295 4.022 1.295.168-.388.254-.81.254-1.236 0-.427-.086-.849-.254-1.237-.559-1.413-1.508-5.829-.279-7.242 1.229-1.413 4.915-8.302 4.915-8.302l1.091.055c-.568 3.245-3.922 22.378-4.331 24.91-.176 1.1-.046 2.922.177 4.722Z"
        opacity={0.1}
      />
      <Path
        fill="#F50057"
        d="m121.854 63.873 1.174.06 3.463 9.773s2.067 5.123 2.458 5.947c.391.824.223 4.239 0 5.24-.224 1-1.676 5.417-1.732 6.535-.056 1.12-2.681 2.238-5.363 2.061-2.681-.177-8.937.707-8.937.707s-6.682-.736-10.782 1.472c0 0-2.625-5.712-2.346-16.369 0 0 4.637-.294 5.81.177s6.871 1.825 7.597 1.119c.726-.707 4.022 1.295 4.022 1.295.168-.388.254-.81.254-1.236 0-.427-.086-.849-.254-1.237-.559-1.413-1.508-5.829-.279-7.242 1.229-1.413 4.915-8.302 4.915-8.302Z"
      />
      <Path
        fill="#DFE6F5"
        d="m110.052 85.5 1.394.91 7.768-13.222-1.394-.91-7.768 13.222Z"
      />
      <Path
        fill="#DFE6F5"
        d="M123.197 71.397c1.372-2.337 1.225-5.054-.33-6.069-1.555-1.014-3.929.057-5.302 2.394-1.372 2.337-1.225 5.054.33 6.069 1.555 1.014 3.929-.057 5.302-2.394Z"
      />
      <Path
        fill="#000"
        d="M122.402 70.878c.986-1.677.879-3.627-.237-4.356-1.116-.728-2.82.041-3.805 1.718-.985 1.678-.879 3.628.237 4.357 1.116.728 2.82-.041 3.805-1.719Z"
        opacity={0.1}
      />
      <Path
        fill="#53526B"
        d="m106.082 92.258 1.394.91 4.833-8.227-1.394-.91-4.833 8.227Z"
      />
      <Path
        fill="#FDC2CC"
        d="m97.89 92.841 3.407-1s16.815.47 11.173-6.83c0 0-2.961-3.003-9.162-.59-6.2 2.415-7.932 2.71-7.932 2.71l2.514 5.71Z"
      />
      <Path
        fill="#000"
        d="M95.376 62.048c.37 0 .67-.316.67-.706 0-.39-.3-.707-.67-.707-.37 0-.67.317-.67.707 0 .39.3.706.67.706ZM106.883 61.636c.371 0 .671-.316.671-.707 0-.39-.3-.706-.671-.706-.37 0-.67.316-.67.706 0 .39.3.707.67.707Z"
        opacity={0.1}
      />
      <Path
        fill="#fff"
        d="M95.376 61.813c.37 0 .67-.317.67-.707 0-.39-.3-.706-.67-.706-.37 0-.67.316-.67.706 0 .39.3.707.67.707Z"
      />
      <Path
        fill="#000"
        d="M96.326 71.822c.37 0 .67-.316.67-.707 0-.39-.3-.706-.67-.706-.37 0-.67.316-.67.706 0 .39.3.707.67.707ZM107.219 71.115c.37 0 .67-.316.67-.706 0-.39-.3-.707-.67-.707-.371 0-.671.317-.671.707 0 .39.3.706.671.706Z"
        opacity={0.1}
      />
      <Path
        fill="#fff"
        d="M96.326 71.587c.37 0 .67-.317.67-.707 0-.39-.3-.707-.67-.707-.37 0-.67.317-.67.707 0 .39.3.707.67.707Z"
      />
      <Path
        fill="#000"
        d="M106.939 105.21c.371 0 .671-.316.671-.707 0-.39-.3-.706-.671-.706-.37 0-.67.316-.67.706 0 .391.3.707.67.707ZM98.117 105.21c.37 0 .67-.316.67-.707 0-.39-.3-.706-.67-.706-.37 0-.67.316-.67.706 0 .391.3.707.67.707Z"
        opacity={0.1}
      />
      <Path
        fill="#fff"
        d="M106.939 104.974c.371 0 .671-.316.671-.706 0-.39-.3-.707-.671-.707-.37 0-.67.317-.67.707 0 .39.3.706.67.706Z"
      />
      <Path
        fill="#000"
        d="M98.787 117.04c.37 0 .67-.316.67-.706 0-.39-.3-.707-.67-.707-.37 0-.67.317-.67.707 0 .39.3.706.67.706ZM107.219 116.334c.37 0 .67-.317.67-.707 0-.39-.3-.706-.67-.706-.371 0-.671.316-.671.706 0 .39.3.707.671.707Z"
        opacity={0.1}
      />
      <Path
        fill="#fff"
        d="M98.787 116.805c.37 0 .67-.316.67-.707 0-.39-.3-.706-.67-.706-.37 0-.67.316-.67.706 0 .391.3.707.67.707ZM98.117 104.974c.37 0 .67-.316.67-.706 0-.39-.3-.707-.67-.707-.37 0-.67.317-.67.707 0 .39.3.706.67.706ZM107.219 116.098c.37 0 .67-.316.67-.706 0-.39-.3-.707-.67-.707-.371 0-.671.317-.671.707 0 .39.3.706.671.706ZM106.883 61.4c.371 0 .671-.316.671-.706 0-.39-.3-.707-.671-.707-.37 0-.67.317-.67.707 0 .39.3.707.67.707ZM107.219 70.88c.37 0 .67-.316.67-.707 0-.39-.3-.706-.67-.706-.371 0-.671.316-.671.706 0 .39.3.707.671.707Z"
      />
      <Path
        fill="#000"
        d="M108.224 94.961s.112 16.133.447 19.018c0 0 .122-18.257-.447-19.018ZM111.073 102.439c-.23 0 4.581 18.899 4.804 20.254.224 1.354-3.463-20.254-4.804-20.254ZM114.872 99.377c0 .177 2.681 10.245 4.022 10.775 1.341.53-4.022-10.775-4.022-10.775ZM125.429 79.77s-5.697.268-5.865 1.135c-.168.867 5.865-1.135 5.865-1.135ZM115.374 156.548s-4.078 1.825-3.463 1.942c.614.118 3.463-1.942 3.463-1.942ZM106.939 153.839c-.158-.376 2.738 1.531 2.738 1.767 0 .235-2.514-1.237-2.738-1.767ZM110.738 160.021s3.184-.169 3.408 1.123c.223 1.291-3.408-1.123-3.408-1.123ZM87.835 160.014s3.463-.714 3.742 0c.28.714-3.742 0-3.742 0ZM89.12 182.218s.227 3.003-.613 3.71c-.84.706.613-3.71.613-3.71ZM88.697 188.577c1.093.118 6.847-.942 6.79 0-.055.942-6.79 0-6.79 0ZM115.095 184.927s-1.962-.318-1.484 1.077l1.484-1.077ZM78.618 67.406h-1.062l-1.62 6.241s-.558 2.179-1.117 2.709c-.559.53.503 5.358.503 5.358s-.615 3.414-1.117 4.298c-.503.883.782 3.061.782 3.061l2.57 6.36 6.814 1.883s12.01 2.767 12.57 3.18c.558.412 1.06-.177 1.452-4.004.39-3.827 1.452-11.246 2.29-11.6 0 0-6.703.766-7.262.649-.559-.118-3.24.059-3.24.059s-3.52-.236-4.078.117c-.558.353.726-1.71.726-1.71a5.976 5.976 0 0 0 0-2.882c-.39-1.59-.614-19.607-8.211-13.719Z"
        opacity={0.1}
      />
      <Path
        fill="#000"
        d="M100.459 85.6c-.838.353-1.899 7.771-2.29 11.598-.391 3.828-.894 4.416-1.452 4.004-.454-.334-8.46-2.223-11.452-2.92.472-2.932.726-6.206.726-6.206l-8.49-23.963h.893c7.597-5.888 7.82 12.129 8.212 13.718a5.976 5.976 0 0 1 0 2.883s-1.285 2.063-.727 1.71c.56-.354 4.078-.118 4.078-.118s2.682-.177 3.24-.059c.559.118 7.262-.647 7.262-.647Z"
        opacity={0.1}
      />
      <Path
        fill="#F50057"
        d="M78.394 67.642h-1.061l-1.62 6.24s-.559 2.18-1.118 2.71c-.558.529.503 5.357.503 5.357s-.614 3.415-1.117 4.298.782 3.062.782 3.062l2.57 6.359 6.815 1.884s12.01 2.767 12.569 3.179c.558.412 1.061-.177 1.452-4.004.391-3.827 1.452-11.245 2.29-11.599 0 0-6.703.766-7.262.648-.558-.118-3.24.059-3.24.059s-3.519-.235-4.078.118c-.558.353.727-1.71.727-1.71a5.973 5.973 0 0 0 0-2.883c-.391-1.59-.615-19.606-8.212-13.718Z"
      />
      <Path
        fill="#000"
        d="M82.025 88.956s-3.072 6.123-3.63 5.416c-.56-.706 3.63-5.416 3.63-5.416ZM78.84 85.469s-2.848 2.486-1.507 3.133c1.34.648 1.508-3.133 1.508-3.133ZM81.522 82.42c.224.059 4.134.877 4.19 1.234.056.356-4.19-1.234-4.19-1.234ZM108.64 39.288a.584.584 0 0 0-.295.246.63.63 0 0 0-.087.386c-.228.211-.548-.038-.733-.309-.188-.268-.4-.6-.684-.563a2.36 2.36 0 0 0-.391.172c-.447.15-.825-.403-1.075-.888l-1.307-2.548c-.874.535-1.906-.026-2.773-.58-.867-.553-1.9-1.116-2.775-.581-1.285.782-1.332 3.389-2.664 4.032-.429.207-.927.162-1.325.447-.393.283-.605.827-.782 1.347a1.442 1.442 0 0 1-.438.761.924.924 0 0 1-.451.115c-.395.071-.8.011-1.162-.171a1.027 1.027 0 0 1-.405-.538 1.088 1.088 0 0 1 .003-.687.643.643 0 0 1 .036-.068 4.31 4.31 0 0 0 .384-.582c.134-.375-.058-.81-.016-1.215.07-.693.764-1.058.883-1.738.049-.267-.002-.551.044-.82a.78.78 0 0 1 .027-.104l-.408.297c.458-.563.688-1.345 1.023-2.028a6.187 6.187 0 0 1 1.506-1.941 5.825 5.825 0 0 1 2.11-1.16c1.456-.448 2.996-.325 4.466.054 1.398.367 2.737.949 3.975 1.726.442.25.835.587 1.157.992.271.42.5.867.686 1.335.434.947 1.618 1.823.675 1.955-.784.11-.069.69.342 1.08a1.1 1.1 0 0 1 .237.274 1.022 1.022 0 0 1-.049.944c-.159.212.485.255.266.358Z"
        opacity={0.1}
      />
      <Path
        fill="#865A61"
        d="M108.64 39.053a.584.584 0 0 0-.295.246.63.63 0 0 0-.087.385c-.228.212-.548-.038-.733-.309-.188-.268-.4-.6-.684-.562a2.36 2.36 0 0 0-.391.171c-.447.151-.825-.402-1.075-.887l-1.307-2.549c-.874.535-1.906-.026-2.773-.579-.867-.553-1.9-1.116-2.775-.582-1.285.782-1.332 3.39-2.664 4.032-.429.208-.927.163-1.325.448-.393.282-.605.826-.782 1.347a1.442 1.442 0 0 1-.438.76.924.924 0 0 1-.451.116c-.395.07-.8.01-1.162-.172a1.027 1.027 0 0 1-.405-.538 1.088 1.088 0 0 1 .003-.687.643.643 0 0 1 .036-.068 4.31 4.31 0 0 0 .384-.582c.134-.374-.058-.81-.016-1.215.07-.692.764-1.057.883-1.738.049-.266-.002-.551.044-.82a.786.786 0 0 1 .027-.103l-.408.297c.458-.563.688-1.345 1.023-2.028a6.189 6.189 0 0 1 1.506-1.942 5.825 5.825 0 0 1 2.11-1.16c1.456-.447 2.996-.325 4.466.054 1.398.367 2.737.95 3.975 1.727.442.25.835.586 1.157.991.271.42.5.867.686 1.335.434.947 1.618 1.823.675 1.955-.784.11-.069.69.342 1.081a1.1 1.1 0 0 1 .237.273 1.021 1.021 0 0 1-.049.945c-.159.212.485.254.266.358Z"
      />
      <Path
        fill="#000"
        d="m108.186 37.477-.089.992s-9.376-12.525-16.67 1.618l-.096-.462a4.3 4.3 0 0 0 .385-.582c.134-.374-.058-.81-.016-1.215.07-.692.764-1.057.883-1.738.049-.266-.002-.551.044-.82a.786.786 0 0 1 .027-.103l-.409.297c.459-.563.689-1.345 1.024-2.028a6.19 6.19 0 0 1 1.506-1.942 5.826 5.826 0 0 1 2.11-1.16c1.456-.447 2.996-.325 4.466.054 1.398.367 2.737.95 3.975 1.727.442.25.835.586 1.157.991.271.42.5.867.686 1.335.434.947 1.618 1.823.675 1.955-.784.11-.069.69.342 1.081Z"
        opacity={0.1}
      />
      <G fill="#000" opacity={0.1}>
        <Path d="M108.417 38.925a.496.496 0 0 0-.106.407c-.228.212-.547-.038-.733-.308-.187-.269-.4-.6-.684-.563a2.436 2.436 0 0 0-.391.172c-.446.15-.824-.403-1.074-.888l-1.308-2.548c-.873.534-1.906-.026-2.772-.58-.867-.553-1.9-1.116-2.776-.581-1.284.781-1.331 3.389-2.663 4.032-.43.207-.927.162-1.325.447-.393.282-.606.827-.782 1.347a1.443 1.443 0 0 1-.438.76.924.924 0 0 1-.452.116c-.394.07-.8.01-1.162-.172a1.102 1.102 0 0 1-.435-.647c-.044.21-.026.431.052.631.077.2.211.37.383.487.362.183.767.243 1.162.172a.923.923 0 0 0 .452-.115c.219-.198.372-.465.438-.76.176-.521.389-1.065.782-1.348.398-.285.896-.24 1.325-.447 1.332-.644 1.379-3.25 2.663-4.032.876-.535 1.909.028 2.776.581.866.554 1.899 1.114 2.772.58.436.847.872 1.697 1.308 2.548.25.485.628 1.038 1.074.888.126-.07.257-.127.391-.172.284-.038.497.294.684.563.186.27.505.52.733.308a.638.638 0 0 1 .088-.385.583.583 0 0 1 .294-.246c.174-.082-.196-.126-.276-.247ZM107.687 36.572a.762.762 0 0 1 .211-.057c.415-.058.417-.26.253-.55a.636.636 0 0 1-.253.08c-.449.063-.406.28-.211.527ZM108.543 38.544a1.1 1.1 0 0 0-.002-.46.696.696 0 0 1-.114.259c-.07.093.017.154.116.201ZM91.767 37.866c-.005.027-.01.053-.013.081-.01.212.005.425.044.633.027-.238.016-.48-.031-.714ZM92.674 34.992c-.105.21-.231.408-.375.59l.36-.26c-.001-.11.003-.22.015-.33Z" />
      </G>
      <Path
        fill="#F50057"
        d="M91.427 39.851s-1.348-6.352-.92-7.371c0 0-1.163-2.517-1.163-3.117a6.176 6.176 0 0 0-.858-2.816c-.613-1.02-1.288-5.754 2.39-6.893 3.677-1.138 6.496-2.157 6.925-2.936.429-.78 6.741-.3 8.457 2.697 1.716 2.996 2.819 2.397 2.819 2.397s2.635 1.738 2.635 3.296c0 1.558-.796 2.337 0 2.697.797.36.184 6.832-3.309 7.012l-.306 3.416s-9.377-12.525-16.67 1.618Z"
      />
      <Path
        fill="#000"
        d="M91.829 20.892s-.81 5.005.67 6.683l-.67-6.683ZM95.627 19.744s-2.067 5.358-1.564 6.389l1.564-6.389ZM97.415 18.037s-1.396 6.977-.726 7.536l.726-7.536ZM99.817 19.921s-1.732 4.475-1.033 5.093l1.033-5.093ZM103.085 20.45s-2.039 3.651-1.62 4.299l1.62-4.298ZM107.275 24.013s-2.179.618-1.732 1.354l1.732-1.354ZM109.341 27.81s-1.955 1.002-1.592 1.532l1.592-1.531ZM90.508 32.48s12.488-5.347 17.895 2.337c0 0-6.563-5.882-17.895-2.337Z"
        opacity={0.1}
      />
      <Path
        fill="#53526B"
        d="m85.995 76.41 1.74-1.856 4.92 5.126-1.74 1.855-4.525-4.714-.395-.412Z"
      />
      <Path
        fill="#DFE6F5"
        d="M74.58 64.516s7.616.683 14.704 9.092l-2.954 3.15-11.75-12.242Z"
      />
      <Path
        fill="#FDC2CC"
        d="M97.423 79.552s-7.32-2.813-8.04-3.486c-.718-.672-4.95 3.24.212 8.56 0 0 6.313 1.896 8.001 0 1.689-1.895-.173-5.075-.173-5.075Z"
      />
      <Path fill="#535461" d="M232.92 133.306h-1.488v35.298h1.488v-35.298Z" />
      <Path
        fill="#65617D"
        d="m242.269 168.497-.095 1.589-.131 2.244-.055.936-.131 2.246-.057.936-.132 2.243-1.501 25.521a4.42 4.42 0 0 1-1.284 2.883 3.991 3.991 0 0 1-2.809 1.173h-7.796a3.986 3.986 0 0 1-2.808-1.174 4.42 4.42 0 0 1-1.283-2.882l-1.503-25.521-.132-2.243-.054-.936-.134-2.246-.055-.936-.131-2.244-.095-1.589a2.363 2.363 0 0 1 .123-.899 2.27 2.27 0 0 1 .45-.773c.199-.223.439-.4.705-.521a2.02 2.02 0 0 1 .843-.184h15.946c.29 0 .577.063.843.184s.506.299.704.521c.199.223.352.486.45.774.098.287.14.593.122.898Z"
      />
      <Path
        fill="#9D9CB5"
        d="m242.174 170.086-.131 2.244h-19.734l-.132-2.244h19.997ZM241.988 173.266l-.131 2.246h-19.359l-.134-2.246h19.624ZM241.8 176.448l-.132 2.243h-18.984l-.132-2.243H241.8Z"
      />
      <Path
        fill="#F50057"
        d="M219.906 146.537c8.663 6.605 12.27 16.936 12.27 16.936s-10.439-.377-19.102-6.982-12.27-16.937-12.27-16.937 10.439.378 19.102 6.983Z"
      />
      <Path
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M200.804 139.554s10.835 6.34 14.311 11.588c3.475 5.247 17.061 12.331 17.061 12.331"
      />
      <Path
        fill="#F50057"
        d="M225.497 133.228c4.716 3.596 6.679 9.219 6.679 9.219s-5.682-.205-10.397-3.8c-4.715-3.595-6.679-9.219-6.679-9.219s5.682.205 10.397 3.8Z"
      />
      <Path
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M215.1 129.428s5.898 3.45 7.79 6.307c1.891 2.856 9.286 6.712 9.286 6.712"
      />
      <Path
        fill="#F50057"
        d="M239.028 142.161c-5.416 6.274-6.562 14.472-6.562 14.472s7.636-1.975 13.052-8.249c5.415-6.274 6.561-14.472 6.561-14.472s-7.635 1.975-13.051 8.249Z"
      />
      <Path
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M252.079 133.912s-7.055 6.431-8.848 10.863c-1.792 4.431-10.765 11.858-10.765 11.858"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={101.524}
        x2={101.524}
        y1={208.216}
        y2={15.547}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="gray" stopOpacity={0.25} />
        <Stop offset={0.535} stopColor="gray" stopOpacity={0.12} />
        <Stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h256v210H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ChefIcon;
