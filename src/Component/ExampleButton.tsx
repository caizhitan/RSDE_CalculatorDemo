import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';



interface ExampleButtonProps {
    onClick?: () => void;
  }
  
  const ExampleButton: React.FC<ExampleButtonProps> = ({ onClick }) => {
      return(
          <div className=' bg-BlueHeader text-white p-3 rounded-xl font-bold h-fulls w-full flex-auto mr-2'>
            <button onClick={onClick} className="w-full h-full items-center justify-center">
                <HelpOutlineOutlinedIcon sx={{ color: '#ffffff' }} className='mr-1' />
                Example
            </button>
          </div>
      )
  }
  
  export default ExampleButton;
  

