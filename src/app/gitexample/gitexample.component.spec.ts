import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitexampleComponent } from './gitexample.component';

describe('GitexampleComponent', () => {
  let component: GitexampleComponent;
  let fixture: ComponentFixture<GitexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitexampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GitexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
