import styled from '@emotion/styled';

const Loading = styled.div`
  width: 50%;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #2196f3;
  --_m: 
    conic-gradient(#0000 10%,#000),
    linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
          mask: var(--_m);
  -webkit-mask-composite: source-out;
          mask-composite: subtract;
  animation: l3 1s infinite linear;
  @keyframes l3 {to{transform: rotate(1turn)}}
`

export default function Loader() {
  return <Loading/>
} 