import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
    const navigate = useNavigate();

  return (
    <div>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button onClick={() => navigate("/home")}>Go in StriveLog 💪</Button>
      </div>
    </div>
  );
};

export default AuthPage;
