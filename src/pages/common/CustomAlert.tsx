import Swal from "sweetalert2";

function getError(name: string): void {
  Swal.fire({
    icon: "error",
    title: "APIエラー",
    text: name + "の取得に失敗しました",
    showCloseButton: true,
  });
}

function getSuccess(name: string) {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: name + "の取得に成功しました",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });
}

export { getError, getSuccess };
