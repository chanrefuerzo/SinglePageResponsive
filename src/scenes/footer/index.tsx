import Logo from "../../assets/Logo.png";

type Props = {};

export default function footer({}: Props) {
  return (
    <footer className="bg-red-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold"> Links</h4>
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
          </p>
          <p>
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold"> Contact Us</h4>
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
          </p>
          <p>
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
          </p>
        </div>{" "}
      </div>
    </footer>
  );
}
