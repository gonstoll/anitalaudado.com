import * as React from 'react';

export default function Logo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="[@media(hover:hover)]:hover:rotate-360 [@media(pointer:fine)]:hover:rotate-360 duration-1000 transition-transform"
    >
      <path
        className="fill-black dark:fill-white"
        d="M23.9938 20.593C23.9938 20.8778 23.6912 21.2682 23.09 21.7641C21.4727 23.1506 19.4781 23.8431 17.1079 23.8417C15.5652 23.8417 14.4445 23.541 13.7459 22.9388C13.0472 22.3366 12.5859 21.2566 12.3619 19.6973C10.6676 22.5658 8.35315 24 5.41866 24C3.80131 24 2.49361 23.5272 1.49711 22.5824C0.500607 21.6376 0.00157177 20.4116 0 18.9051C0 14.4925 4.0638 11.8858 12.1914 11.0855V9.98241C12.1914 6.48434 12.0594 4.33229 11.7961 3.52699L11.7411 3.26602C11.2138 1.51807 9.87776 0.643374 7.7323 0.641928C6.49296 0.641928 5.49646 0.974458 4.74202 1.6388C3.98835 2.30458 3.6127 2.9494 3.6127 3.58048C3.6127 3.92964 4.0638 4.13205 4.96756 4.2094C6.32164 4.31349 6.99829 5.08337 6.99829 6.51904C7.00929 6.87325 6.94327 7.22602 6.8026 7.55566C6.66193 7.8853 6.45052 8.18458 6.18175 8.43542C5.90355 8.68843 5.57269 8.88651 5.20962 9.01735C4.84654 9.14819 4.45831 9.20819 4.0693 9.19518C2.97771 9.19518 2.08416 8.88867 1.38944 8.27566C1.0468 7.97783 0.776452 7.61566 0.596485 7.21301C0.416518 6.81036 0.330857 6.37663 0.345788 5.94072C0.345788 4.43277 1.15368 3.06651 2.77024 1.84048C4.3868 0.613012 6.51261 0 9.14846 0C13.0614 0 15.7892 0.646988 17.3319 1.94169C18.5736 3.02675 19.1944 4.91566 19.1944 7.60843V16.5831C19.1944 18.3325 19.2133 19.3467 19.2518 19.6258C19.438 21.0969 19.9858 21.832 20.8872 21.832C21.5269 21.832 22.3175 21.412 23.2606 20.5728C23.4586 20.3892 23.5985 20.3096 23.7117 20.3096C23.7525 20.3046 23.7934 20.3082 23.8319 20.3212C23.8704 20.3342 23.905 20.3552 23.9325 20.3826C23.96 20.4108 23.9804 20.4441 23.9914 20.481C24.0024 20.5178 24.0024 20.5561 23.9938 20.593ZM12.1977 14.3414V11.7672C8.54726 12.433 6.72244 14.3573 6.72401 17.5402C6.72401 19.9916 7.62699 21.2176 9.43295 21.2176C10.4467 21.2176 11.1611 20.6928 11.5768 19.6439C11.9918 18.5942 12.1993 16.8267 12.1977 14.3414Z"
      />
    </svg>
  );
}
