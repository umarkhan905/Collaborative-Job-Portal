import { Calendar, Download, Facebook, FileText, Globe } from "lucide-react";
import React from "react";

type Props = {
  modalRef: React.RefObject<HTMLDialogElement>;
};

const UserModal: React.FC<Props> = ({ modalRef }) => {
  // Najeeb ye ref copy kar le or is me as a prop pass kar de
  //   const modalRef = React.useRef<HTMLDialogElement>(null);
  // or jo view profile wala button hai na us pe onClick me modalRef.current?.showModal() call kar de

  return (
    <dialog id="my_modal_3" className="modal" ref={modalRef}>
      <div className="modal-box scrollbar-hide max-w-[90%] w-full rounded-md">
        <form method="dialog">
          <button className="absolute right-1 btn btn-sm btn-circle btn-ghost top-1">
            ✕
          </button>
        </form>

        <div className="flex flex-col w-full gap-5 p-2 md:flex-row">
          {/* Left Section */}
          <div className="flex-1 space-y-4">
            {/* User Info */}
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-12 border rounded-full">
                  <img
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="Avatar"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="font-semibold">John Doe</h4>
                <p className="text-xs">Software Engineer</p>
              </div>
            </div>

            {/* Biography */}
            <div className="space-y-2">
              <h4 className="font-semibold">Biography</h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                quidem quae, voluptas quod, ipsa quos quia quibusdam quia quidem
                quae, voluptas quod, ipsa quos quia quibusdam quia. Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Cumque eum quasi
                amet iste sunt aut quibusdam esse voluptas natus maxime illum
                maiores, ducimus cupiditate quaerat, quia dolorem?
                Exercitationem aut odio dignissimos accusantium placeat
                voluptates quasi natus? Error molestiae voluptatibus aut iste
                voluptates earum inventore natus. Rem aliquid tenetur fugiat
                porro.
              </p>
              <hr />
            </div>

            {/* Cover Letter */}
            <div className="space-y-2">
              <h4 className="font-semibold">Cover Letter</h4>
              <p className="text-sm">
                Dear Sir, <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                quidem quae, voluptas quod, ipsa quos quia quibusdam quia quidem
                quae, voluptas quod, ipsa quos quia quibusdam quia. Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Cumque eum quasi
                amet iste sunt aut quibusdam esse voluptas natus maxime illum
                maiores, ducimus cupiditate quaerat, quia dolorem?
                Exercitationem aut odio dignissimos accusantium placeat
                voluptates quasi natus? Error molestiae voluptatibus aut iste
                voluptates earum inventore natus. Rem aliquid tenetur fugiat
                porro. <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                quidem quae, voluptas quod, ipsa quos quia quibusdam quia quidem
                quae, voluptas quod, ipsa quos quia quibusdam quia. Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Cumque eum quasi
                amet iste sunt aut quibusdam esse voluptas natus maxime illum
                maiores, ducimus cupiditate quaerat, quia dolorem?
                Exercitationem aut odio dignissimos accusantium placeat
                voluptates quasi natus? Error molestiae voluptatibus aut iste
                voluptates earum inventore natus. Rem aliquid tenetur fugiat
                porro. <br /> <br />
                Sincerely, <br />
                <br />
                John Doe
              </p>
              <hr />
            </div>

            {/* Social Links */}
            <div className="space-y-2">
              <h4 className="font-semibold">Social Links</h4>
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <button
                    className="btn btn-square btn-outline btn-sm size-10 btn-primary"
                    key={index}
                  >
                    <Facebook />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-4 md:w-1/3">
            <div className="grid grid-cols-2 gap-4 p-3 border rounded-md">
              {Array.from({ length: 6 }).map((_, index) => (
                <div className="space-y-2" key={index}>
                  <Calendar size={20} className="text-primary" />
                  <p className="text-xs uppercase text-base-300">founded in:</p>
                  <p className="text-xs font-semibold">14 March 2022</p>
                </div>
              ))}
            </div>

            <div className="p-3 space-y-1 border rounded-md">
              <h4 className="font-semibold">Download CV</h4>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="text-base-300 size-12" />

                  <div className="space-y-1">
                    <p className="text-xs">John Doe</p>
                    <p className="text-xs font-semibold">PDF</p>
                  </div>
                </div>

                {/* Download Button */}
                <button className="h-10 rounded-none btn btn-sm">
                  <Download className="text-primary" />
                </button>
              </div>
            </div>

            <div className="p-3 space-y-4 border rounded-md">
              <h2 className="font-semibold">Contact Information</h2>

              {Array.from({ length: 4 }).map((_, index) => (
                <div className="space-y-2" key={index}>
                  <div className="flex items-center gap-2">
                    <Globe size={20} className="text-primary" />
                    <div className="">
                      <p className="text-xs uppercase text-base-300">website</p>
                      <p className="text-xs font-semibold">www.example.com</p>
                    </div>
                  </div>

                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default UserModal;
