import { MyDocuments} from "../components/Docu_comp";
import { BigSection } from "../components/sections";


export default async function DocPage () {
    return (
        <>
            <BigSection>
                <div className="h-screen">
                    <h1 className="text-4xl font-bold mb-8 dark:text-white text-slate-700">My Documents/</h1>
                    <div className="mt-10">
                        <MyDocuments />
                    </div>
                </div>
            </BigSection>
        </>
    )
}   
