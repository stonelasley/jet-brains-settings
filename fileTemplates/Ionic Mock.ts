import { $TYPE } from 'ionic-angular';

export class ${TYPE}Mock {
	public static instance(): $TYPE {
		return jasmine.createSpyObj('$TYPE', ['$END']);
	}
}