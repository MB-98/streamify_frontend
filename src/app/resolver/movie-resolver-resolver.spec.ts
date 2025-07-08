import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { movieResolverResolver } from './movie-resolver-resolver';

describe('movieResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => movieResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
