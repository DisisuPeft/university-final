import Swal from "sweetalert2";

export default function Alert(title: string, icon: "success" | "error" | "warning" | "info" | "question"){
  const toast = Swal.mixin({
    // toast: true,
    // position: "top-end",
    // showConfirmButton: false,
    // timerProgressBar: true,
    // timer: 4000,
    // didOpen: (toast) => {
    //      toast.onmouseenter = Swal.stopTimer;
    //      toast.onmouseleave = Swal.resumeTimer;
    // }
    toast: true,
    position: 'top-end', // puedes usar: 'top', 'top-start', 'top-end', 'center', 'bottom', 'bottom-start', 'bottom-end'
    icon: icon,
    title: title,
    iconColor: '#4CAF50',
    customClass: {
        popup: 'colored-toast',
        title: 'toast-title',
        icon: 'toast-icon'
    },
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background: '#333',
    color: '#fff'
  });

  toast.fire({
    icon: icon,
    title: title,
  });
}