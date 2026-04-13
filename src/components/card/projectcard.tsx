
import Swapios from '../../assets/images/Swapios-Logo.png'
import CousuMouche from '../../assets/images/CousuMoucheLogo.png'
import LogoHoori from '../../assets/images/HooriLogo.webp'

export function ProjectSection() {

    return (
        <div className="pt-20 flex flex-col lg:h-screen w-full overflow-y-auto mb-20">
            <div className="flex flex-col flex-1/3 items-center lg: mb-10">
                <h1>Mes projets</h1>
            </div>
            <div className="w-full flex flex-col flex-1/3">
                <ProjectCard />
            </div>
            <div className="flex flex-col flex-1/3">
            </div>
        </div>
    )
}

export function ProjectCard() {
    return (
        <div className="text-lg w-full flex justify-center lg:h-full">
            <div className="flex flex-wrap justify-center lg:gap-20 gap-5 lg:h-full items-stretch">
                <div className='w-[90%] border rounded-lg border-CardBg bg-CardBg xs:w-96'>
                    <div className="flex flex-row items-center justify-between p-2 ">
                        <p className="text-lg font-medium">Swapios</p>
                        <img
                            src={Swapios}
                            alt="Logo Swapios"
                            className="w-[120px] h-auto"
                        />
                    </div>
                    <div className="flex p-3">
                        <p>Développement d'une application mobile (type "Messenger") destinée aux professionnels de santé.
                            Mise en place d'appels et de partage de fichiers entre confrères afin de poser un diagnostique partagé et orientation vers un spécialiste.
                        </p>
                    </div>
                </div>
                <div className="w-[90%] border rounded-lg border-CardBg bg-CardBg xs:w-96 p-4 relative">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-lg font-bold">Hoori</p>
                        <img src={LogoHoori} alt="Logo Hoori" className="w-[100px] h-auto" />
                    </div>
                    <p className="p-2">
                        Création d'un site vitrine et d'un dashboard client à destination des agriculteurs.
                        Objectif : automatiser la détection de Datura d'une parcelle agricole.
                        L'utilisateur programme ses drones et visualise les zones infectées par le Datura.
                    </p>
                    <div className="flex justify-evenly mt-6 absolute w-[90%] bottom-4">
                        <button className="border-2 rounded-lg flex flex-row justify-center items-center pl-2 pr-2 border-buttonBorderColor hover:bg-buttonBorderColor" onClick={() => window.open("https://github.com/Hoori2024/Website/tree/main/frontend/showcaseWebsites", "_blank")}>
                            <p className="text-base p-2">Github</p>
                        </button>
                    </div>
                </div>
                <div className="w-[90%] border rounded-lg border-CardBg bg-CardBg xs:w-96 p-4 relative">
                    <div className="flex justify-between absolute w-[90%]">
                        <p className="text-lg font-bold">Cousu Mouche</p>
                        <img src={CousuMouche} alt="Logo Cousu Mouche" className="w-[80px] h-auto" />
                    </div>
                    <p className="p-2 mt-10 w-[90%]">
                        <span className='flex w-[80%]'>
                            Site E-Commerce réalisé pour une artisane couturière.
                        </span>
                        Mise en place d'une authentification,
                        d'un dashboard administrateur afin que l'utilisatrice puisse faire évoluer son projet
                        avec un maximum d'autonomie (ajouter, modifier ou supprimer facilement des produits
                        de sa boutique en ligne). Mise en place d'un back-end en Express.js.
                    </p>
                    <div className="flex justify-evenly mt-6">
                        <button className="border-2 rounded-lg flex flex-row justify-center items-center pl-2 pr-2 border-buttonBorderColor hover:bg-buttonBorderColor" onClick={() => window.open("https://cousumouche.fr", "_blank")}>
                            <p className="text-base p-2">Site web</p>
                        </button>
                        <button className="border-2 rounded-lg flex flex-row justify-center items-center pl-2 pr-2 border-buttonBorderColor hover:bg-buttonBorderColor" onClick={() => window.open("https://github.com/Sevan-s/CousuMouche", "_blank")}>
                            <p className="text-base p-2">Github</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
