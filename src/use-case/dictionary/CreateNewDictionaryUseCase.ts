// MIT © 2017 azu
import { UseCase } from "almin";
import { dictionaryRepository, DictionaryRepository } from "../../infra/repository/DictionaryRepository";
import { createDictionary } from "../../domain/DictionaryFactory";
import { DictionaryPattern } from "../../domain/DictionaryPattern";
import { DictionaryExpect } from "../../domain/DictionaryExpect";
import { DictionarySpec } from "../../domain/DictionarySpec";

export const createCreateNewDictionaryUseCase = () => {
    return new CreateNewDictionaryUseCase({ dictionaryRepository });
};

export class CreateNewDictionaryUseCase extends UseCase {
    constructor(private repo: { dictionaryRepository: DictionaryRepository }) {
        super();
    }

    execute() {
        const dictionary = createDictionary()
            .inputExpect(new DictionaryExpect(""))
            .addPattern(new DictionaryPattern(""))
            .addSpec(new DictionarySpec({ actual: "" }));
        this.repo.dictionaryRepository.save(dictionary);
    }
}
