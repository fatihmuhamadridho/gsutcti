import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";

export default function BackdropMUI({ repo }: any) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div onClick={handleToggle}>
      <Button className="flex !items-center !text-[white] space-x-3 hover:!bg-secondary">
        <img
          className="py-[6px]"
          src="/images/icons/repository.svg"
          alt=""
          width={16}
          height={16}
        />
        {/* <p>{repo?.id} - {repo?.full_name} - {repo?.language}</p> */}
        <div className="w-full flex flex-col text-justify normal-case focus:!bg-secondary">
          <p className="text-[#58a6ff]">
            {repo?.id} - {repo?.full_name}
          </p>
        </div>
      </Button>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <div className="p-4 w-full max-w-[700px] bg-primary flex mb:flex-col sm:flex-row">
          <div className="p-4 w-auto space-y-[8px] sm:border-r-[1px]">
            <h1 className="text-[16px] font-semibold">Owner</h1>
            <hr />
            <div className="flex sm:flex-col items-center mb:space-x-[12px] mb:py-2 sm:py-0 sm:space-x-[0px] sm:space-y-[8px]">
              <img
                className="rounded-[100px]"
                src={repo?.owner?.avatar_url}
                alt=""
                width={100}
                height={100}
              />
              <p className="text-center">{repo?.owner?.login}</p>
            </div>
          </div>
          <div className="p-4 w-full space-y-[8px]">
            <h1 className="text-[16px] font-semibold">Repositiry detail</h1>
            <hr />
            <ul className="grid grid-cols-[100px_10px_auto]">
                <p>id</p>
                <p>:</p>
                <p>{repo?.id}</p>
                <p>repo name</p>
                <p>:</p>
                <p>{repo?.full_name}</p>
                <p>language</p>
                <p>:</p>
                <p>{repo?.language || "<language>"}</p>
                <p>description</p>
                <p>:</p>
                <p>{repo?.description || "<description>"}</p>
                <p>created at</p>
                <p>:</p>
                <p>{repo?.created_at}</p>
                <p>updated at</p>
                <p>:</p>
                <p>{repo?.updated_at}</p>
            </ul>
          </div>
        </div>
      </Backdrop>
    </div>
  );
}
