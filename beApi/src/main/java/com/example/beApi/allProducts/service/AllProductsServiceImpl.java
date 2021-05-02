package com.example.beApi.allProducts.service;

import com.example.beApi.allProducts.domain.AllProducts;
import com.example.beApi.allProducts.repository.AllProductsRepository;
import com.example.beApi.cmm.service.AbstractService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AllProductsServiceImpl extends AbstractService<AllProducts>
    implements AllProductsService{

    private final AllProductsRepository repo;

    @Override
    public Long save(AllProducts allProducts) {
        return (repo.save(allProducts) != null) ? 1L : 0L;
    }

    @Override
    public Optional<AllProducts> findById(Long id) {
        return repo.findById(id);
    }

    @Override
    public List<AllProducts> findAll() {
        return repo.findAll();
    }

    @Override
    public Long count() {
        return repo.count();
    }

    @Override
    public Optional<AllProducts> getOne(Long id) {
        return Optional.of(repo.getOne(id));
    }

    @Override // orElse는 항상 null인데 그러면 항상 1L을 반환한다?
    public Long delete(AllProducts allProducts) {
        repo.delete(allProducts);
        return (findById(allProducts.getAllProductsNo()).orElse(null) == null) ? 1L : 0L;
    }

    @Override
    public Boolean existsById(long id) {
        return repo.existsById(id);
    }
}
