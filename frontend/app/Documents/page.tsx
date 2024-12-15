import { MyDocuments} from "../components/Docu_comp";
import { BigSection } from "../components/sections";


export default async function DocPage () {
    return (
        <>
            <BigSection>
                <div className="h-screen">
                    <h1>My Documents</h1>
                    <p>Above you can find all my documents.</p>
                    <div>
                        <MyDocuments />
                    </div>
                </div>
            </BigSection>
        </>
    )
}   
