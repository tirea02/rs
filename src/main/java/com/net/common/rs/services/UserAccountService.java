package com.net.common.rs.services;

import com.net.common.rs.entity.UserAccount;
import com.net.common.rs.repository.UserAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UserAccountService {
    private final UserAccountRepository userAccountRepository;

    @Autowired
    public UserAccountService(UserAccountRepository userAccountRepository) {
        this.userAccountRepository = userAccountRepository;
    }

    public List<UserAccount> getAllUserAccounts() {
        return userAccountRepository.findAll();
    }

    public Optional<UserAccount> getUserAccountById(Long id) {
        return userAccountRepository.findById(id);
    }

    public UserAccount createUserAccount(UserAccount userAccount) {
        // Add validation or business logic if needed
        return userAccountRepository.save(userAccount);
    }

    public UserAccount updateUserAccount(Long id, UserAccount updatedUserAccount) {
        // Add validation or business logic if needed
        updatedUserAccount.setUserAccountId(id);
        return userAccountRepository.save(updatedUserAccount);
    }

    public void deleteUserAccount(Long id) {
        userAccountRepository.deleteById(id);
    }
}
