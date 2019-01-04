import { TestBed, inject } from '@angular/core/testing';

import { SumService } from '../../src/angular-library-starter';

describe('SumService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                SumService
            ]
        });
    });

    it('should calculate the sum',
        inject([SumService],
            (sumService: SumService) => {
                sumService.calculate(45, 78, 90, 674);
                expect(sumService.sum).toEqual(887);
            })
    );

});
