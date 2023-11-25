import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div>
      <div className="h-64 text-center pt-10">
        <div>Isobel Boddenham</div>
        <div>
          Reprehenderit occaecat occaecat nostrud sint aliqua in ex esse
          voluptate. Irure nostrud deserunt ut amet consectetur deserunt culpa.
          Cillum tempor esse sunt ad cupidatat id anim. Dolor proident excepteur
          quis sit ex id excepteur commodo cupidatat consequat quis. Anim
          nostrud consectetur et incididunt reprehenderit consectetur cillum id
          mollit nostrud. Ea officia ullamco ut ad magna in. Consequat nisi
          laborum velit nulla do laborum enim aliqua aliquip anim velit.
        </div>
      </div>
      <div>
        <div className="bg-photo1 bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen z-0"></div>
        <div className="bg-sunset h-64 w-screen z-10"></div>
      </div>
      <div>
        <div className="bg-photo2 bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen z-0"></div>
        <div className="bg-sunset h-64 w-screen z-10"></div>
      </div>
      <div>
        <div className="bg-photo3 bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen z-0"></div>
        <div className="bg-sunset h-64 w-screen z-10"></div>
      </div>
      <div>
        <div className="bg-photo4 bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen z-0"></div>
        <div className="bg-sunset h-64 w-screen z-10"></div>
      </div>
    </div>
  );
}
