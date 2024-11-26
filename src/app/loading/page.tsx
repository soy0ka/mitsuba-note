export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="spinner-box">
        <div className="configure-border-1">  
          <div className="configure-core"></div>
        </div>  
        <div className="configure-border-2">
          <div className="configure-core"></div>
        </div> 
      </div>
    </div>
  );
}