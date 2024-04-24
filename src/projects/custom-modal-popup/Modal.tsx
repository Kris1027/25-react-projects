type ModalProps = {
  id?: string;
  header?: string;
  body?: string;
  footer?: string;
  close: () => void;
};

export const Modal = ({ id, header, body, footer, close }: ModalProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex justify-center items-center">
      <div
        id={id || "modal"}
        className="flex flex-col w-3/4 bg-black text-white text-center"
      >
        <button onClick={close}>&times;</button>
        <h1 className="text-xl bg-green-500 py-5">
          {header ? header : "default header"}
        </h1>
        <p className="bg-blue-500 py-5">{body ? body : "default body"}</p>
        <p className="bg-red-500 py-5">{footer ? footer : "default footer"}</p>
      </div>
    </div>
  );
};
