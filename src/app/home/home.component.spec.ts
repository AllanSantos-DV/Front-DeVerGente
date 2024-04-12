import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [ HomeComponent ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title "DeVerGente"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('DeVerGente');
  });

  it('should have two buttons', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('button').length).toBe(2);
  });
});
